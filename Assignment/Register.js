import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Register = (props) => {
   const {navigation} = props;
    const Click1 = () => {
        navigation.navigate('Login')
    }
  return (
    <View style = {styles.container}>
        <Image style = {styles.images}  source={require('./images/images.png')}/>

      <Text style={styles.title}>Register</Text>
  
     <Text style = {styles.textinput}>Username</Text>
     <TextInput style = {styles.input}>Nhập Họ Tên</TextInput>
     <Text style = {styles.textinput}>Email</Text>
     <TextInput style = {styles.input}>Nhập Email</TextInput>
     <Text style = {styles.textinput}>Password</Text>
     <TextInput style = {styles.input}>Nhập Mật Khẩu</TextInput>
     <Text style = {styles.textinput}>Again Password</Text>
     <TextInput style = {styles.input}>Nhập Lại Mật Khẩu</TextInput>
    <Pressable style = {styles.bottom}>
        <Text style = {styles.textbuttom}>Register</Text>
    </Pressable>
    <Pressable style = {styles.bottom} onPress={Click1}>
        <Text style = {styles.textbuttom}>Login</Text>
    </Pressable>
      
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
    container : {
        marginStart : 10,
        marginEnd : 10,
        flexDirection: 'column', 
    },
    images : {
        width : 120,
        height : 120,
        alignSelf : 'center',
        marginTop : 50 ,
    },
    title : {
        fontWeight  :'bold',
        fontSize : 30,
        color : 'black',
        fontFamily : 'Popins',
       alignSelf : 'center',
       marginTop : 15 ,
    },
    textinput : {
        fontSize : 15,
        fontWeight : 'bold',
        color : 'red',
        marginTop : 4,
    },
    input : {
        marginTop : 4,
        height : 50,
        borderRadius : 10,
        borderWidth : 1,
    },
    bottom : {
        height : 50,
        backgroundColor : 'green',
        borderRadius : 10,
        marginTop : 20,
        justifyContent : 'center',
        alignItems : 'center',
        
    },
    textbuttom : {
        color : 'white',
        justifyContent : 'center',
        fontWeight : 'bold',
    },
    
})