import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";
const Login = (props) => {
  const {navigation} = props;
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [checkemail,setCheckEmail] = useState(true);
  const [checkPassword,setCheckPassword] = useState('');
 
  const onSubmit = ()=> {
  let formData = {
    _email : email,
    _password : password,

  }
  formData._password === '' ? setCheckPassword('Khong Duoc de trong') : setCheckPassword('')
  const RegexP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(!RegexP.test(formData._email)){
    setCheckEmail(false)
  }else {
    setCheckEmail(true)
  }
 }

  const Click = () => {
    navigation.navigate('Register');
  }
  return (
    
    <View style= { styles.container}>
   
   <Image style={styles.images} source={require('./images/images.png')}/>
       
   <Text style={styles.title}>Restauran</Text>
      
     <Text style={styles.text1}>Username</Text> 
     <TextInput style={styles.textInput} onChangeText={(value)=>setEmail(value)}/>
     <Text style={{color : 'red'}}>{!checkemail?'Sai Dinh Dang Email':''}</Text>
     <Text style={styles.text1} >Password</Text> 
     <TextInput style={styles.textInput} onChangeText={(value)=>setPassword(value)}/>
     
     <Text style={{color : 'red'}}>{checkPassword}</Text>
    <View style= {[styles.remember,{justifyContent:'space-between'}, {marginTop : 7}]}>
   <View style={styles.remember}>
     <BouncyCheckbox fillColor='blue'/>
    <Text>Remember me</Text>
    </View>
    <Text style={styles.textfogot}>Forgot the password ?</Text>
   </View>
   
  
    <Pressable style={styles.buttom} onPress={()=>onSubmit()}>
        <Text style={styles.textLogin}>Login</Text>
    </Pressable>

    <Pressable style={styles.buttom} onPress={Click}>
        <Text style={styles.textLogin}>Register</Text>
    </Pressable>

    <View style={[styles.remember , {justifyContent: 'space-between'}]}>
    <Pressable style={styles.buttonSosial}>
        <Image style={styles.imagesSosial} source={require('./images/facebook.png')}/>
        <Text>FaceBook</Text>
    </Pressable>
    <Pressable style={styles.buttonSosial}>
        <Image style={styles.imagesSosial} source={require('./images/google.png')}/>
        <Text>Google</Text>
    </Pressable>
    </View>
  
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container : {
 
    marginStart : 15,
    marginEnd : 10,
    flexDirection: 'column', 
    
    
  },
  images :{
    width : 120,
    height : 120,
    marginTop : 100,
    alignSelf : 'center'
  },
     title : {
    fontFamily : 'Popins',
    fontSize : 50,
    fontWeight : 'bold',
    alignSelf : 'center',
    color : '#050505',
    marginBottom : 50
  },
  text1 : {
    fontFamily : 'Popins',
    fontSize : 15,
    fontWeight : 'bold',
    
    color : '#050505',
   
  },
  textInput : {
    height : 50,
    borderRadius : 10,
    borderWidth : 1,
    marginTop : 5,
  },
  buttom : {
    height : 50,
    backgroundColor : '#1877F2',
    borderRadius : 10,
    marginTop : 20 ,
    justifyContent : 'center',
    alignItems : 'center',
  },
  textLogin : {
    color : '#FFFFFF',
    fontSize : 20,
    fontWeight  :'bold'
  },
  imagesSosial : {
    width : 20,
    height : 20,
    marginEnd : 10,
  },
  buttonSosial : {
    flexDirection : 'row',
    width : 174,
    height : 48,
    backgroundColor : 'gray',
    marginTop : 15,
    borderRadius : 10,
    justifyContent : 'center',
    alignItems : 'center'
  },
  remember : {
    flexDirection : 'row',
  },
  remember : {
    flexDirection : 'row',
  },
  textfogot : {
    color : 'orange'
  },


})