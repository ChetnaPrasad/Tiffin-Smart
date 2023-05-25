import React,{useState} from "react";
import {View,Text,StyleSheet,Image,TouchableOpacity,Alert} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import {ResetStyle } from "./ResetStyle";
// import { signupStyle } from "./SignupStyle";
import reset from "../../Assets/reset.png"
import Input from "../../Componants/TextInput/TextInput";
import SquareButton from "../../Componants/Button/SqureButton";
import view from "../../Assets/view.png"
import hide from "../../Assets/hide.png"
import Navigation from "../../Navigation/Navigation";
import {isEmpty} from "lodash"
export default function Reset({navigation}){
    const [newpassword, setNewPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [passwordVisible2, setPasswordVisible2] = useState(true);
    const errors = {}
    const [errors1 ,setErrors] = useState('')
    const eyevisible = () => {
        setPasswordVisible(!passwordVisible);
      };
      const confirmpvisible = () => {
        setPasswordVisible2(!passwordVisible2);
      };

    const validate=()=>{
      const newpasswordRegex =
    /^(?=.*[A-Za-z\])(?=.*[A-Za-z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{7,30}$/;
      
    if (!newpassword){
      errors.newpassword = " please enter new password";
    }else if (newpassword.length < 6 || newpassword.length < 8){
      errors.newpassword = "*password must be between 6 to 8 characters"
    }else if(!newpasswordRegex.test(newpassword)){
        errors.newpassword ="*password must be stronger"
    }

    if(!confirmpassword){
      errors.confirmpassword = '*Confirm password is required';
    }else if(confirmpassword.length < 6 || confirmpassword < 8 ){
      errors.confirmpassword = "*password must be between 6 to 8 characters"
    } else if(newpassword != confirmpassword){
      errors.confirmpassword = "*Password should be same"
    }
    setErrors(errors)

    }  
  
    //  const onsubmit = (e)=>{
    //    e.preventDefault()
    //    validate(newpassword , confirmpassword)
    //    if(isEmpty(errors)){
    //     Alert.alert(" password sucsessfully update")
    //     console.log(newpassword , confirmpassword)
    //    }
    //   // Alert.alert(" password sucsessfully update")
    //  }
    
    const onsubmit =(e)=>{
      e.preventDefault();
      validate(newpassword , confirmpassword)
      if(isEmpty(errors)){
        Alert.alert(" password sucsessfully update")
       console.log(newpassword , confirmpassword)
      }
    }   

  return(
    <View>
        <LinearGradient
        colors={['#FFDEAD', '#F99494']}
        start={{x: 1, y: 1}}
        end={{x: 1, y: 0}}
        style={ResetStyle.linearGradient}>
        <View style={ResetStyle.forgotView}>
            <Text style={ResetStyle.forgottext}>
                Reset Password
            </Text>
        </View>
        <View style={ResetStyle.resetView}>
            <Text  style={ResetStyle.resettext}>
              Set  the  new  password  for  your    account . So  you  can  login  and  access  all  the  features
            </Text>
        </View>
        <View style={ResetStyle.inputview}>
        <View style={ResetStyle.newpView}>
            <Text style={ResetStyle.newptext}>
              New Password
            </Text>
        </View>
        <Input
            placeholder="New Password *"
            onChangeText={e => setNewPassword(e)}
            value={newpassword}
            secureTextEntry={passwordVisible}
          />
            <TouchableOpacity onPress={eyevisible}>
              <View style={ResetStyle.eyeimage}>
                <Image style={ResetStyle.eyepimage} source={passwordVisible ? hide : view} />
              </View>
            </TouchableOpacity>
            <View>
            <Text style={ResetStyle.errortext}>{errors1.newpassword}</Text>
          </View>
            <View style={ResetStyle.confirmView}>
            <Text style={ResetStyle.confirmtext}>
             Confirm New Password
            </Text>
        </View>
          <Input
            placeholder="confirm New Password *"
            onChangeText={e => setConfirmPassword(e)}
            value={confirmpassword}
            secureTextEntry={passwordVisible2}
          />
          <TouchableOpacity onPress={confirmpvisible}>
              <View style={ResetStyle.eyeimage}>
                <Image style={ResetStyle.eyepimage} source={passwordVisible2 ? hide : view} />
              </View>
            </TouchableOpacity>
            <View>
            <Text style={ResetStyle.errortext}>{errors1.confirmpassword}</Text>
          </View>
        </View>
        <View style={ResetStyle.buttonView}>
            <SquareButton onPress={onsubmit}  label="Reset Password"/>
        </View>
      </LinearGradient>
    </View>
  )
}