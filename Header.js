import { StyleSheet, Text, View,Image,TextInput, TouchableOpacity  } from 'react-native'
import React from 'react'
import {useNavigation} from "@react-navigation/native"
const Header = () => {
  const navigation = useNavigation();
  return (
    <View>
    <View style={styles.container1}>

  <View>
  <TouchableOpacity onPress={()=>{navigation.navigate('Toi')}}>
  <Image style = {styles.Anhleft} source={require('../images/coffe5.png')}/>
    </TouchableOpacity>
    
    
  </View>

  <View >
    <TouchableOpacity onPress={()=>{navigation.navigate('YeuThich2')}}>
       <Image style={styles.Anhright} source={require('../images/logo-quan-cafe-7.jpg')}/> 
    </TouchableOpacity>
    
  </View>
 </View>
 <Text style= {styles.Text}>Find the best {'\n'}food for you</Text>
 <View style={styles.viewsearch}>
   <TextInput style={{flex :1,marginLeft :10}} placeholder='Enter yoir key search'/>
   <Image style={styles.search} source={require('../images/search.png')}/>
 </View>
 <View>
  <Image style={{width : 390, height : 200,marginTop : 10,marginBottom :  10,}} source={require('../images/banerrr.jpg')}/>
 </View>
 <View style={styles.viewc}>
 <View>
     <Text style={styles.text1}> New Product </Text>  
 </View>
 <View>
    <Text style={styles.text}> Sản Phẩm </Text>
 </View>
 </View>


 </View>  
  )
}

export default Header

const styles = StyleSheet.create({
    container1 : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
       
       },
         Anhleft : {
             width : 30,
             height : 30,
             borderRadius : 10,
         },
         Anhright : {
             width : 30,
             height : 30,
           borderRadius : 10,
         },
         Text : {
           fontSize : 20,
           fontWeight : 'bold',
           color : '#d2691e',
           
         },
         search : {
           width : 20,
           height : 20,
          marginRight : 10,
         },
         viewsearch : {
           marginTop : 5,
           flexDirection : 'row',
           backgroundColor  :'white',
           borderRadius : 10,
           justifyContent : 'space-around',
           alignItems : 'center'
         },
         text : {
           fontSize : 15,
           fontWeight : 'bold',
           color: 'white',
         },
         text1 : {
           fontSize : 15,
           fontWeight : 'bold',
           color: 'red',
         },
         viewc : {
           flexDirection : 'row',
           marginTop : 5,
           justifyContent : 'space-between'
     
         }
})