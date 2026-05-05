import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserListScreen from '../screens/UserListScreen';
import AddUserScreen from '../screens/AddUserScreen';
import Filter from '../components/Filter';
import Role from '../components/Role';
import {color} from '../styles/color';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="UserListScreen"
          component={UserListScreen}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="AddUserScreen"
          component={AddUserScreen}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Filter"
          component={Filter}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: color.CadetBlue,
            },
          }}
        />

        <Stack.Screen
          name="Role"
          component={Role}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: color. CadetBlue,
            },
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
