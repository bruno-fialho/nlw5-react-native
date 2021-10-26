import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';
import { PlantSelect } from '../pages/PlantSelect';
import { PlantSave } from '../pages/PlantSave';
import { MyPlants } from '../pages/MyPlants';

import AuthRoutes from './tab.routes';

import colors from '../styles/colors';

export const Stack = createNativeStackNavigator<RootStackParamList>();

function StackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.white,
        }
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
      />
      <Stack.Screen
        name="UserIdentification"
        component={UserIdentification}
      />
      <Stack.Screen
        name="Confirmation"
        component={Confirmation}
      />
      <Stack.Screen
        name="PlantSelect"
        component={AuthRoutes}
      />
      <Stack.Screen
        name="PlantSave"
        component={PlantSave}
      />
      <Stack.Screen
        name="MyPlants"
        component={AuthRoutes}
      />
    </Stack.Navigator>
  )
}

export default StackRoutes;