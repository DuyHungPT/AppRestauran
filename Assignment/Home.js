import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import GioHang from './GioHang';
import MHChinh from './MHChinh';
import SPChiTiet from './SPChiTiet';
import YeuThich from './YeuThich';
import YeuThich2 from './YeuThich2';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Home = () => {
  return (
   
    <NavigationContainer style={styles.header}>
    <Tab.Navigator 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'ManHinhChinh') {
         return <Image style={styles.image} source={require('./images/home.png')}/>
        } else if (route.name === 'SPChiTiet') {
          return <Image style={styles.image} source={require('./images/deatils.png')}/>
        }else if (route.name === 'GioHang') {
          return <Image style={styles.image} source={require('./images/giohang.png')}/>
        }else if (route.name === 'YeuThich2') {
          return <Image style={styles.image} source={require('./images/love.png')}/>
        }      
      },
      tabBarActiveTintColor: 'red',
      tabBarInactiveTintColor: 'black',
    })}
   >

     <Tab.Screen name="MHChinh" component={MHChinh}  options={{headerShown : false}} />
     <Tab.Screen name="SPChiTiet" component={SPChiTiet}  options={{headerShown : false}} />
     <Tab.Screen name="GioHang" component={GioHang}  options={{headerShown : false}}/>
     <Tab.Screen name="YeuThich2" component={YeuThich2}  options={{headerShown : false}}/>
   </Tab.Navigator>
 </NavigationContainer>
  )

}

export default Home

const styles = StyleSheet.create({
    image : {
        width : 20,
        height : 20,
      },
})