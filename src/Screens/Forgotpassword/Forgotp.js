import React,{useState} from "react";
import {View,Text,StyleSheet,Image} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { ForgotStyle } from "./ForgotStyle";
// import { signupStyle } from "./SignupStyle";
import reset from "../../Assets/reset.png"
import Input from "../../Componants/TextInput/TextInput";
import SquareButton from "../../Componants/Button/SqureButton";
import {isEmpty} from "lodash";
import Navigation from "../../Navigation/Navigation";


export default function Forgot({navigation}){
    const [email, setEmail] = useState("");
    const errors = {}
    const [errors1 ,setErrors] = useState('')
    const validation=()=>{
        const emailRegex =
           /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9] {1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       if (!email){
        errors.email = "Please enter email "
       }else if(!emailRegex.test(email)){
        errors.email="This is invalid email"
       }
       setErrors(errors)
        }

     const handleSubmit =(e)=>{
       e.preventDefault();
       validation(email)
       if(isEmpty(errors)){
        navigation.navigate("Reset")
        console.log(email)
       }
     }   

  return(
    <View>
        <LinearGradient
        colors={['#FFDEAD', '#F99494']}
        start={{x: 1, y: 1}}
        end={{x: 1, y: 0}}
        style={ForgotStyle.linearGradient}>
       <View >
         <Image style={ForgotStyle.image} source={reset}/>
        </View>
        <View style={ForgotStyle.forgotView}>
            <Text style={ForgotStyle.forgottext}>
                Forgot Password
            </Text>
        </View>
        <View style={ForgotStyle.resetView}>
            <Text style={ForgotStyle.resettext}>
               Enter your Email Address/mobile no. to reset your password
            </Text>
        </View>
        <View style={ForgotStyle.inputview}>
        <Input
            placeholder="Email *"
            onChangeText={e => setEmail(e)}
            value={email}
          />
          <View>
            <Text style={ForgotStyle.errortext}>{errors1.email}</Text>
          </View>
        </View>
        <View style={ForgotStyle.buttonView}>
            <SquareButton onPress={handleSubmit} label="Reset Password"/>
        </View>
      </LinearGradient>
    </View>
  )
}