import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './MHHome/Header'
import Nav from './MHHome/Nav'
import Item from './MHHome/Item'

const MHChinh = () => {
  return (
    <View style={styles.container}>
    <Header/>
    <Nav/>
    <Item/>
    </View>
  )
}

export default MHChinh

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 20,
        backgroundColor : 'black'
      }
})