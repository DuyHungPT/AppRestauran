import { StyleSheet, Text, View,FlatList} from 'react-native'
import React from 'react'
import YeuThich from './YeuThich'

const YeuThich2 = () => {
  return (

    <View>
     <FlatList
        data={Data}
        renderItem={({item}) => <YeuThich dulieu={item} />}
        keyExtractor={item => item._id}
      />
    </View>
  )
}

export default YeuThich2

const styles = StyleSheet.create({})

const Data = [
    {"_id":"1",
    "images":"https://jia.vn/wp-content/uploads/2021/02/cong-thuc-lam-3-mon-ga-hap-sieu-don-gian-nhung-rat-thom-ngon-11-1-1024x683.jpg", 
    "name":"Gà Luộc",
    "gia" : "200000",
    },
    {"_id":"2","images":"https://cdn.eva.vn/upload/4-2018/images/2018-12-06/cach-lam-ga-nuong-ngon-danh-bat-hu-truyen-nguoi-nguoi-xin-cong-thuc-3-1544080616-720-width623height465.jpg", "name":"Gà Nướng","gia" :  "300000",},
    {"_id":"3" ,"images":"https://cdn.eva.vn/upload/4-2019/images/2019-11-08/gf-27-1573207809-836-width640height480.jpg", "name": "Vịt Quay","gia" :  "400000",},
    {"_id":"4" ,"images":"https://29foods.com/media/news/0303_ga-quay.jpg", "name": "Vịt Quay","gia" :  "500000",},
 ]