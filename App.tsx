import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './Assignment/Login'
import Register from './Assignment/Register'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Assignment/Home';
import YeuThich from './Assignment/YeuThich';
import YeuThich2 from './Assignment/YeuThich2';


const Stack = createNativeStackNavigator();
const App = () => {
  return (

    <Home/>

    
    // <NavigationContainer>
    // <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
    //    <Stack.Screen name="Login" component={Login} />
    //    <Stack.Screen name="Register" component={Register} />
    //  </Stack.Navigator>
    // </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({

})