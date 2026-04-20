import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserListScreen from '../screens/UserListScreen';
import AddUserScreen from '../screens/AddUserScreen';
import Filter from '../components/Filter';

const Stack = createNativeStackNavigator ();
const AppNavigator = () => {
  return (
    <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name="UserListScreen" component={UserListScreen} 
                options={{
                 headerShown:false,
                headerTitleAlign:'center'
               }}/> 
              <Stack.Screen name="AddUserScreen" component={AddUserScreen}
              options={{
               headerShown:false,
                headerTitleAlign:'center'
               }}  
               />
                <Stack.Screen name="Filter" component={Filter} 
                options={{
                 headerShown:true,
               }}/> 
              </Stack.Navigator>
            </NavigationContainer>
  )
}

export default AppNavigator

