import { StyleSheet, Text, View ,FlatList,Image} from 'react-native'
import React, {useState,useEffect }  from 'react'
import Nav from './Nav'
const Item = () => {

  // const [dataitemHome, setdataitemHome] = useState([])
  
  // // const getAPI = async ()=> {
  // // try {
  // // const respone = await fetch('http://192.168.0.100:3000/posts')
  // // const data = await respone.json()
  // // setdataitemHome(data)
  // // }catch(error){
  // // console.log(error);
  // // }
  // // }
  // // useEffect(()=>{
  // //   getAPI()
  // // },[])
  return (
    <View style={styles.container}>
    {/* <FlatList 
       data={Dataa}
       renderItem={({item}) =>
       <View style={styles.imga}><Nav Dataa={item}  /></View>    
  }
       keyExtractor={item => item.id}
       horizontal={true}
     /> */}
     <Text>aa</Text>
   </View>
  )
}

export default Item

const styles = StyleSheet.create(
  {
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
const Dataa = [
  {"id":"1",
  "images":"https://jia.vn/wp-content/uploads/2021/02/cong-thuc-lam-3-mon-ga-hap-sieu-don-gian-nhung-rat-thom-ngon-11-1-1024x683.jpg", 
  
  },
  {"id":"2","images":"https://cdn.eva.vn/upload/4-2018/images/2018-12-06/cach-lam-ga-nuong-ngon-danh-bat-hu-truyen-nguoi-nguoi-xin-cong-thuc-3-1544080616-720-width623height465.jpg"},
  {"id":"3" ,"images":"https://cdn.eva.vn/upload/4-2019/images/2019-11-08/gf-27-1573207809-836-width640height480.jpg"},
  {"id":"4" ,"images":"https://29foods.com/media/news/0303_ga-quay.jpg"},
]