import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserListScreen from './src/screens/UserListScreen'
import AddUserScreen from './src/screens/AddUserScreen'

const Stack = createNativeStackNavigator();
const App = () => {
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
       </Stack.Navigator>
     </NavigationContainer>
   );
};
export default App;
