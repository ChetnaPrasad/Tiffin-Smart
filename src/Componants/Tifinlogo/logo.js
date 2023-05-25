import React from "react";
import {View,Text, Image} from "react-native";
import Tifinlogo from "../../Assets/Tifinlogo.png"
import {logoStyle } from "./LogoStyle";

export default function Logo(){
  return(
    <View>
    <Image source={Tifinlogo} style={logoStyle.logo}/>
    </View>
  )
}
