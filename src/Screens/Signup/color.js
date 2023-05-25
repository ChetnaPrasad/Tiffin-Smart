import React from "react";
import {View,Text,StyleSheet} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
// import { signupStyle } from "./SignupStyle";

export default function SignUp(){
  return(
    <View>
        <LinearGradient
        colors={['#FFDEAD', '#F99494']}
        start={{x: 1, y: 1}}
        end={{x: 1, y: 0}}
        style={signupStyle.linearGradient}>
      <Text>
        hello
      </Text>
      </LinearGradient>
    </View>
  )
}

const signupStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      linearGradient: {
        height: "100%",
        width: "100%",
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: 'center',
      },
      buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
      },
})