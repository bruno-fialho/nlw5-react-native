import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns';

export async function savePlant(plant: PlantWithDateProps): Promise<void> {
  try {
    const data = await AsyncStorage.getItem('@plantmanager:plants');
    const oldPlants = data ? (JSON.parse(data) as StoragePlantProps) : {};
    
    const newPlant = {
      [plant.id]: {
        data: plant
      }
    }

    await AsyncStorage.setItem(
      '@plantmanager:plants',
      JSON.stringify({
        ...newPlant,
        ...oldPlants
      })
    );

  } catch (error) {
    throw new Error('Erro ao salvar planta no Storage!');
  }
}

export async function loadPlant(): Promise<PlantWithDateProps[]> {
  try {
    const data = await AsyncStorage.getItem('@plantmanager:plants');
    const plants = data ? (JSON.parse(data) as StoragePlantProps) : {};

    const plantsSorted = Object
      .keys(plants)
      .map((plant) => {
        return {
          ...plants[plant].data,
          hour: format(new Date(plants[plant].data.dateTimeNotification), 'HH:mm')
        }
      })
      .sort((a, b) => 
        Math.floor(
          new Date(a.dateTimeNotification).getTime() / 1000 -
          Math.floor(new Date(b.dateTimeNotification).getTime() / 1000)
        )
      );

      return plantsSorted;
  } catch (error) {
    throw new Error('Erro ao carregar planta no Storage!');
  }
}
