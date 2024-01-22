import { FlatList, FlatListComponent, Image, StyleSheet, Text, View,ListFooterComponent, Pressable,Button } from 'react-native'
import React from 'react'


const GioHang = () => {
  const CartCard = ({item}) => {
    return <View style={styles.CartCar}>
      <Image source={item.imagene} style={{width : 80,height : 80}} />
    <View style={{height :100,marginLeft:10,paddingVertical:20,flex:1,}}>

      <Text style={{fontWeight:'bold',fontSize: 16,color: 'black'}}>{item.name}</Text>
      <Text style={{fontWeight: 'bold', fontSize: 13,color: 'red'}}>{item.gia}</Text>
  
    </View>

    <View style={{marginRight:20,alignItems:'center'}}>
      <Text style={{fontWeight: 'bold',fontSize: 18,color: 'black'}}>7</Text>
     
     <View style={styles.actionsBtn}>
      <Image style={{margin : 6}} source={require('./images/add.png')}/>
      <Image style={{margin : 6}} source={require('./images/minus.png')}/>
       </View>
   
    </View> 

  </View>
  }

  return (
 <View  style={{backgroundColor : 'pink',flex : 1}}>
  <View style={styles.header}>
   <Image style={{width : 28,height : 28,margin : 10}} source={require('./images/home.png')}/>
   <Text style={{fontSize : 20,fontWeight : 'bold',color : 'black'}}>Cart</Text>
  </View>
<FlatList showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom : 80}} 
  data={foods}
  renderItem={({item}) => <CartCard item={item}
  />}
ListFooterComponentStyle={{paddingHorizontal: 20,marginTop :20}}
ListFooterComponent={()=>(<View>
  <View style={{flexDirection: 'row',justifyContent: 'space-between', marginVertical : 15}}> 
  <Text style={{fontSize: 18,fontWeight: 'bold',color: 'black'}}>Total Price</Text>
  <Text style={{fontSize: 18,fontWeight: 'bold',color: 'black'}}>$ 700000</Text>
    </View>
 <Pressable style={{marginHorizontal:30}} >
  <Button style={{height:70,borderRadius: 20,}} title='Pay'/> 
 </Pressable>
 
    
</View>)}
/>

 </View>
  )
}

export default GioHang

const styles = StyleSheet.create({
  header : {
    paddingVertical : 20,
    flexDirection : 'row',
    alignItems :'center',
    marginHorizontal : '20',
  },
  CartCar : {
    height : 100,
    elevation : 15,
    borderRadius : 10,
    backgroundColor : 'white',
    marginVertical : 10,
    marginHorizontal : 10,
    flexDirection : 'row',
    alignItems : 'center',

  },
  actionsBtn : {
    width: 80,
    height: 30,
    backgroundColor : 'green',
    borderRadius: 30,
    paddingHorizontal : 5,
    flexDirection : 'row',
    justifyContent : 'center',
    alignContent : 'center',
    
  },
})

const foods = [
  {"_id":"1",
  "imagene":"./images/luoc.webp", 
  "name":"Gà Luộc",
  "gia" : "200000",
  },
  {"_id":"2","imagene":"./images/luoc.webp", "name":"Gà Nướng","gia" :  "300000",},
  {"_id":"3" ,"imagene":"./images/luoc.webp", "name": "Vịt Quay","gia" :  "400000",},
  {"_id":"4" ,"imagene":"https://29foods.com/media/news/0303_ga-quay.jpg", "name": "Vịt Quay","gia" :  "500000",},
]