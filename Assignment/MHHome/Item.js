import { StyleSheet, Text, View,Image,ScrollView } from 'react-native'
import React from 'react'

const Item = () => {
  return (
    <ScrollView>
    <View>
    <View style={styles.viewc}>
        <View>
            <Text style={styles.text1}> Phổ Biến </Text>  
        </View>
        <View>
           <Text style={styles.text}> Sản Phẩm </Text>
        </View>
        </View>
    <View  style = {styles.containerA}>
    <View style= {styles.container}>
          <View style= {styles.viewImg}>
          <Image style={styles.image} source={require('../images/luoc.webp')}/>
          </View>    
          <Text style={styles.Text}>Ca Phe</Text>
          <View style={styles.vieww}>
            <Text style={styles.Text}>$4.5</Text>
            <Image style={styles.image1} source={require('../images/plus.png')}/>
          </View>   
        </View>
        <View style= {styles.container}>
          <View style= {styles.viewImg}>
          <Image style={styles.image} source={require('../images/Luoc3.jpg')}/>
          </View>    
          <Text style={styles.Text}>Ca Phe</Text>
          <View style={styles.vieww}>
            <Text style={styles.Text}>$4.5</Text>
            <Image style={styles.image1} source={require('../images/plus.png')}/>
          </View>   
        </View>
        <View style= {styles.container}>
          <View style= {styles.viewImg}>
          <Image style={styles.image} source={require('../images/Nuong2.jpg')}/>
          </View>    
          <Text style={styles.Text}>Ca Phe</Text>
          <View style={styles.vieww}>
            <Text style={styles.Text}>$4.5</Text>
            <Image style={styles.image1} source={require('../images/plus.png')}/>
          </View>   
        </View>
    </View>
    <View  style = {styles.containerA}>
    <View style= {styles.container}>
          <View style= {styles.viewImg}>
          <Image style={styles.image} source={require('../images/quay.png')}/>
          </View>    
          <Text style={styles.Text}>Ca Phe</Text>
          <View style={styles.vieww}>
            <Text style={styles.Text}>$4.5</Text>
            <Image style={styles.image1} source={require('../images/plus.png')}/>
          </View>   
        </View>
        <View style= {styles.container}>
          <View style= {styles.viewImg}>
          <Image style={styles.image} source={require('../images/quay3.jpg')}/>
          </View>    
          <Text style={styles.Text}>Ca Phe</Text>
          <View style={styles.vieww}>
            <Text style={styles.Text}>$4.5</Text>
            <Image style={styles.image1} source={require('../images/plus.png')}/>
          </View>   
        </View>
        <View style= {styles.container}>
          <View style= {styles.viewImg}>
          <Image style={styles.image} source={require('../images/quay.png')}/>
          </View>    
          <Text style={styles.Text}>Ca Phe</Text>
          <View style={styles.vieww}>
            <Text style={styles.Text}>$4.5</Text>
            <Image style={styles.image1} source={require('../images/plus.png')}/>
          </View>   
        </View>
        
    </View>
    
    
    <View  style = {styles.containerA}>
    <View style= {styles.container}>
          <View style= {styles.viewImg}>
          <Image style={styles.image} source={require('../images/quay.png')}/>
          </View>    
          <Text style={styles.Text}>Ca Phe</Text>
          <View style={styles.vieww}>
            <Text style={styles.Text}>$4.5</Text>
            <Image style={styles.image1} source={require('../images/plus.png')}/>
          </View>   
        </View>
        <View style= {styles.container}>
          <View style= {styles.viewImg}>
          <Image style={styles.image} source={require('../images/Nuong3.jpg')}/>
          </View>    
          <Text style={styles.Text}>Ca Phe</Text>
          <View style={styles.vieww}>
            <Text style={styles.Text}>$4.5</Text>
            <Image style={styles.image1} source={require('../images/plus.png')}/>
          </View>   
        </View>
        <View style= {styles.container}>
          <View style= {styles.viewImg}>
          <Image style={styles.image} source={require('../images/quay3.jpg')}/>
          </View>    
          <Text style={styles.Text}>Ca Phe</Text>
          <View style={styles.vieww}>
            <Text style={styles.Text}>$4.5</Text>
            <Image style={styles.image1} source={require('../images/plus.png')}/>
          </View>   
        </View>
    </View>
    <View  style = {styles.containerA}>
    <View style= {styles.container}>
          <View style= {styles.viewImg}>
          <Image style={styles.image} source={require('../images/luoc.webp')}/>
          </View>    
          <Text style={styles.Text}>Ca Phe</Text>
          <View style={styles.vieww}>
            <Text style={styles.Text}>$4.5</Text>
            <Image style={styles.image1} source={require('../images/plus.png')}/>
          </View>   
        </View>
        <View style= {styles.container}>
          <View style= {styles.viewImg}>
          <Image style={styles.image} source={require('../images/luoc2.jpg')}/>
          </View>    
          <Text style={styles.Text}>Ca Phe</Text>
          <View style={styles.vieww}>
            <Text style={styles.Text}>$4.5</Text>
            <Image style={styles.image1} source={require('../images/plus.png')}/>
          </View>   
        </View>
        
        <View style= {styles.container}>
          <View style= {styles.viewImg}>
          <Image style={styles.image} source={require('../images/quay2.jpg')}/>
          </View>    
          <Text style={styles.Text}>Ca Phe</Text>
          <View style={styles.vieww}>
            <Text style={styles.Text}>$4.5</Text>
            <Image style={styles.image1} source={require('../images/plus (1).png')}/>
          </View>   
        </View>
        
    </View>
    </View>
    
    </ScrollView>
  )
}

export default Item

const styles = StyleSheet.create({
    containerA : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginTop : 20,
        },
        container : {
         width : 100,
         height : 120,
         flexDirection : 'column',
         backgroundColor : '#262B33',
         borderRadius : 10,
        padding : 5,
        },
        image : {
            width : 80,
            height : 80,
            borderRadius : 10,  
            overflow : 'hidden',
            borderWidth : 2,
            borderColor : '#141921',    
        },
        image1 : {
         backgroundColor : 'green',
          width : 10,
          height : 10,
          padding : 7,
         

        },
        Text : {
            fontFamily : 'fontFamily',
            fontSize : 12,
            fontWeight : 'bold',
            marginStart : 8,
            color :'white',
        },
        vieww : {
            flexDirection : 'row',
            justifyContent: 'space-between',
            marginEnd : 10,
            color :'white',
        },
        viewImg : {
            justifyContent : 'center',
            alignItems : 'center',
            
        },
        $ : {
          color : 'red'
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
          marginTop : 15,
          justifyContent : 'space-between'
    
        }
})