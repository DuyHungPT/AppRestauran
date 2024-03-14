import { Button, Pressable, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

import {useNavigation} from "@react-navigation/native"
const ChiTiet2 = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
     <Text style={styles.text}>Gà Nướng Muối Ớt {'\n'}{'\n'}
     Gà được làm sạch sau đó đem xát với muối ớt.lớp da bên ngoài vàng óng, giòn giòn hấp dẫn. Gà ở đây chấm cùng muối ớt xanh cực ngon.
     {'\n'}{'\n'} Size 
</Text>
<View style={styles.view2}>
<Pressable style={styles.button}>
<Text style={styles.text}>S</Text>
</Pressable>
<Pressable style={styles.button}>
<Text style={styles.text}>M</Text>
</Pressable>
<Pressable style={styles.button}>
<Text style={styles.text}>L</Text>
</Pressable>
</View >

<View style={styles.view7}>
    <View style={styles.view6}>
     <View>
        <Text style={styles.text}>price</Text>
    </View>
    <View style={styles.view9}>
        <View>
            <Text style={[styles.text4,{marginRight : 5}]}>$</Text>
        </View>
        <View>
            <Text style={styles.text}>4.20</Text>
        </View>
    </View>  
    </View>

    <TouchableOpacity  style={styles.button1} onPress={()=>{navigation.navigate('ThanhToan')}}>
      <Text style={styles.text}>Add to Cart</Text>

    </TouchableOpacity>
    
</View>
    </View>
  )
}

export default ChiTiet2

const styles = StyleSheet.create({
container : {
    
    width: 412,
    height : 300,
    backgroundColor : '#000000',
    padding : 10,
},
text : {
    color: 'white',
    fontSize : 15,
     fontWeight : 'bold',
},
text4 : {
    color: '#ff8c00',
    fontSize : 15,
    fontWeight : 'bold',
},
button : {
    width : 90,
    height :35,
    backgroundColor : '#141921',
    borderRadius : 10,
    marginTop : 10,
    borderWidth : 2,
    borderColor : '#ff8c00',
    justifyContent : 'center',
    alignItems : 'center',
},
view2 : {
    flexDirection : 'row',
    justifyContent : "space-between",
    marginStart : 5,
    marginEnd : 5,
},
button1 : {
    width : 235,
    height :50,
    backgroundColor : '#ff8c00',
    borderRadius : 10,
    marginTop : 10,
    borderWidth : 2,
    borderColor : '#ff8c00',
    justifyContent : 'center',
    alignItems : 'center',
},
view6 : {
  justifyContent : 'center',
  alignItems : 'center',

width: 100,
height : 50,

},
view7 : {
    flexDirection : 'row',
    justifyContent : "space-between",
    marginStart : 5,
    marginEnd : 5,
    marginTop : 20,
},
view9 : {
   flexDirection : 'row',
   marginTop : 5,
},


})