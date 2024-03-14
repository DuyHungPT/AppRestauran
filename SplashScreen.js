import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Login from './Login';
const SplashScreen = (props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Chuyển sang màn hình đăng nhập sau 3 giây
      props.navigation.replace('Login');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./images/iconapple.jpg')} />
      <Text style={styles.text}>Restauran</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
