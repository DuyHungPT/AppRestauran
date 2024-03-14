import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Nav = (props) => {
const {dulieua} = props
  return (
    
    <View style={styles.container}>
      <View style={styles.imga}><Image  source={{uri:dulieua.images}} style={{width : 80,height : 80}} /></View>    
    </View>
  )
}

export default Nav

const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : 'row',
        marginBottom : 10,
        },
        imga : {
            margin : 18,     
            borderRadius : 10,
            overflow : 'hidden',
            borderWidth : 2,
            borderColor : '#a9a9a9',         
        },
       
})