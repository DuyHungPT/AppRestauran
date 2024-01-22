import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const YeuThich = (props) => {
  const {dulieu} = props;
  return (
  <View style= {styles.containerr}>
   
    <View style={styles.container}>
      <Image style={styles.imagesa} source={{uri:dulieu.images}}/>
      <View style={styles.view3}>
     <View style={styles.view2}>
     <Text style={styles.text}>{dulieu.name}</Text>
      <View style= {styles.view}>
      <Text style={styles.tien}>$</Text>
      <Text style={styles.text1}>{dulieu.gia}</Text>
      </View>
     </View>
      
      <Image style={{width:35,height: 35,marginLeft : 220,marginTop : 10}} source={require('./images/love.png')}/>
      </View>
     
    </View>
  </View>
    
    
  )
}

export default YeuThich

const styles = StyleSheet.create({
  containerr : {
   padding : 10,
   backgroundColor : 'pink',
  },

  container : {
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : 'green',
    borderWidth : 5,
    alignContent  :'center',
    borderRadius : 10,
  },
  text : {
   fontSize : 20,
   fontWeight : 'bold',
   color : 'red',
 
  },
  view : {
    flexDirection : 'row',
  },
  tien : {
    fontSize : 20,
    fontWeight : 'bold',
    color : 'red',
  },
  text1 : {
    fontSize : 20,
    fontWeight : 'bold',
    color : 'blue',
    marginLeft : 10,
   },
   view2 : {
    flexDirection : 'column',
   },
   view3 : {
    flexDirection : 'row',
   },
   imagesa :{
    width : 350,height : 200,borderWidth: 2,borderRadius : 10,borderColor : 'yellow',marginTop : 10}

  
})