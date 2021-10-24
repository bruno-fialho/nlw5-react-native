import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';

import colors from '../styles/colors';
import { PlantSelect } from '../pages/PlantSelect';

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
        component={PlantSelect}
      />
    </Stack.Navigator>
  )
}

export default StackRoutes;