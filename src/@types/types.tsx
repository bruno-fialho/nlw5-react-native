type PlantProps = {
  id: number;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: string[];
  frequency: {
    times: number;
    repeat_every: string;
  },
}

type RootStackParamList = {
  Welcome: undefined;
  UserIdentification: undefined;
  Confirmation: {
    title: string;
    subtitle: string;
    buttonText: string;
    icon: 'smile' | 'hug',
    nextScreen: 'PlantSelect' | 'MyPlants';
  };
  PlantSelect: undefined;
  PlantSave: { 
    plant: PlantProps 
  };
  MyPlants: undefined;
};

type PlantWithDateProps = PlantProps & {
  hour: string;
  dateTimeNotification: Date;
}

type StoragePlantProps = {
  [id: string]: {
    data: PlantWithDateProps,
  }
}