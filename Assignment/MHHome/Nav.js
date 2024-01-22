import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Nav = () => {
  return (
    <ScrollView horizontal >
  
   
    <View style={styles.container}>
      <View style={styles.imga}><Image  source={require('../images/luoc.webp')} style={{width : 80,height : 80}} /></View>
      <View style={styles.imga}><Image  source={require('../images/Nuong.jpg')} style={{width : 80,height : 80}} /></View>
      <View style={styles.imga}><Image  source={require('../images/quay.png')} style={{width : 80,height : 80}} /></View>
      <View style={styles.imga}><Image  source={require('../images/quay2.jpg')} style={{width : 80,height : 80}} /></View>
      <View style={styles.imga}><Image  source={require('../images/Nuong2.jpg')} style={{width : 80,height : 80}} /></View>
      <View style={styles.imga}><Image  source={require('../images/luoc2.jpg')} style={{width : 80,height : 80}} /></View>
      <View style={styles.imga}><Image  source={require('../images/quay3.jpg')} style={{width : 80,height : 80}} /></View>
      <View style={styles.imga}><Image  source={require('../images/Nuong3.jpg')} style={{width : 80,height : 80}} /></View>
    </View>
 

</ScrollView>
  )
}

export default Nav

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        height : 120,
        marginBottom : 150,
        },
        imga : {
            margin : 18,     
            borderRadius : 10,
            overflow : 'hidden',
            borderWidth : 2,
            borderColor : '#a9a9a9',         
        },
       
})