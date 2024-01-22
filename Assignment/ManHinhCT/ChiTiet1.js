import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const ChiTiet1 = () => {
  return (
    <View style={styles.container}>

      <View style={styles.containercon}>
      
      <View style= {styles.view3}>
       <View>
        <View>
        <Text style={styles.tex1}>Cappuccino</Text>
        </View>
        <View>
         <Text style={styles.text}>A cappuccino is an espresso-based{'\n'} coffee drink that  is traditionally</Text>
       </View>
       </View>
     
      <View style={styles.viewhat}>
       <View>
       <Image style={styles.imagehatcf} source={require('../images/hatcaphe1.jpg')}/>
        </View>
        <View>
        <Image style={styles.imagehatcf} source={require('../images/hatcaph2.jpg')}/>
       </View>
      </View>
    

      </View>

      <View style= {styles.view3}>
       <View style={styles.view4}>
        <View > 
        <Image style={styles.star} source={require('../images/star.png')}/>
        </View>
        <View>
         <Text style={styles.tex1}>4.5</Text>
       </View>
       </View>
     
      <View >
       <View style={styles.text5}>
        <Text style={styles.text6}>Chao Moi Nguoi</Text>
        </View>
     
      </View>
    

      </View>
       
       </View>
        <Image style={styles.img} source={require('../images/Nuong.jpg')}/>
     

    </View>
  )
}

export default ChiTiet1

const styles = StyleSheet.create({
  img: {
    width : 420,
    height : 500,

  },
  container : {

  },
  containercon : {
   backgroundColor : 'rgba(0,0,0,0.7)',
   width : 410,
   height : 150,
  position : 'absolute',
  zIndex : 1000,
  marginTop : 350,
  borderRadius : 15,
  },
  imagehatcf : {
    width : 60,
    height : 60,
    borderRadius : 10,
    marginRight :15,
  },
  tex1:{
    fontSize : 20,
    fontWeight : 'bold',
    color: '#add8e6', 
    marginRight : 5,
  },
  text:{
    fontSize : 10,
    fontWeight : 'bold',
    color: 'white', 
  },
  view3 : {
    flexDirection : 'row',
    padding : 10 ,
    justifyContent : 'space-between',
    alignItems : 'center',
  },
  viewhat : {
    flexDirection : 'row',

  },
  view4 : {
    flexDirection : 'row',
    alignItems : 'center',
    
  },
  star : {
    width : 30,
    height :30,
    marginRight : 10,
  },
  text5 : {
    width : 130,
    height: 43,
    backgroundColor : '#141921',
    borderRadius :10,
    marginRight : 15,
    alignItems : 'center',
    justifyContent : 'center',
  },
  text6 : {
    color : 'white'
  }
})