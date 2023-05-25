import React , {useEffect} from 'react';
import {View, Text, Image, useAnimatedValue} from 'react-native';
import {Splashstyle} from './SplashStyle';
import LinearGradient from 'react-native-linear-gradient';
import Tifinlogo from '../../Assets/Tifinlogo.png';
import Logo from '../../Componants/Tifinlogo/logo';
import Button from '../../Componants/Button/Button';
import Navigation from '../../Navigation/Navigation';
// import SplashScreen from 'react-native-splash-screen'

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
     navigation.navigate("Login")
    }, 2000)
  },[]);
  // useEffect(() => {
  //   setInterval(() => {
  //    navigation.navigate("Login")
  //   }, 2000)
  // },[]);
  
  // useEffect(()=>{
  //   SplashScreen.hide();
  // },[]);
  
  return (
    <View>
      <LinearGradient
        colors={['#FFDEAD', '#F04E4E']}
        start={{x: 1, y: 1}}
        end={{x: 1, y: 0}}
        style={Splashstyle.linearGradient}>
        <View style={Splashstyle.logo}>
          <Logo />
        </View>
        <View style={Splashstyle.teaxtAll}>
          <View style={Splashstyle.letView}>
            <Text style={Splashstyle.letText}>LET'S GET STARTED</Text>
          </View>
          <View style={Splashstyle.theView}>
            <Text style={Splashstyle.theText}>The best is yet to come..</Text>
          </View>
        </View>
        <View style={Splashstyle.buttonView}>
          <Button style={Splashstyle.button} label="Started Now" />
        </View>
      </LinearGradient>
    </View>
  );
}
