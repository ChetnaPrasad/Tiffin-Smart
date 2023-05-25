import React, {useState} from 'react';
import {View, Text, TouchableOpacity,Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {signinStyle} from './SignInStyle';
import Input from '../../Componants/TextInput/TextInput';
import SquareButton from '../../Componants/Button/SqureButton';
import SortButton from '../../Componants/Button/SortButton';
import fb from '../../Assets/fb.png';
import google from '../../Assets/google.png';
import Skip from '../../Componants/Button/Skip';
import view from '../../Assets/view.png';
import hide from '../../Assets/hide.png';
import {isEmpty} from 'lodash';

export default function SignIn({navigation}) {
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);
  // const [errors, setErrors] = useState({});
  const errors = {};
  const [errors1, setErrors] = useState({});


  const pwdvisible=()=>{
    setPasswordVisible(!passwordVisible)
  }

  const validation=(email,password ,number)=>{
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9] {1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRegex =
    /^(?=.*[A-Za-z\])(?=.*[A-Za-z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{7,30}$/;

   if(!(email || number)){
    errors.email="Please enter the email/number";
   }else if(!(emailRegex.test(email) || number.length < 10)){
    errors.email="Email id is not match"
   }

   if(!password){
    errors.password="Please enter password registration number"
   }else if(!passwordRegex.test(password)){
     errors.password="Password is not match";
   }
  setErrors(errors)
 }


const handleSubmit=(e)=>{
  e.preventDefault();
  validation(email, password,number);
  if ((email || number) !== '') {
    if (password !== '') {
      if (isEmpty(errors)) {
        navigation.navigate('Dashboard');
        console.log(email, password);
      }
    }
  }

  // navigation.navigate('Dashboard');
}

  return (
    <View>
      <LinearGradient
        colors={['#FFDEAD', '#F99494']}
        start={{x: 1, y: 1}}
        end={{x: 1, y: 0}}
        style={signinStyle.linearGradient}>
        <View style={signinStyle.skipView}>
          <Skip style={signinStyle.skip} label="Skip" />
        </View>
       <View style={signinStyle.logintoView}>
        <View >
          <Text style={signinStyle.logintotext}>
             LOG INTO DELIVERY
          </Text>
        </View>
        <View>
          <Text style={signinStyle.boytext}>
            BOY APP
          </Text>
        </View>
        </View>
        <View style={signinStyle.input}>
        {/* <View>
            <Text style={signinStyle.errortext}>{errors1.email}</Text>
          </View> */}
          <Input
            placeholder="Email / mobile no. *"
            onChangeText={e => setEmail(e)}
            value={email}
          />
           <View>
            
            <Text style={signinStyle.errortext}>{errors1.email}</Text>
          </View>
          <Input
            placeholder="Password *"
            onChangeText={e => setPassword(e)}
            value={password}
            secureTextEntry={passwordVisible}
          />
          <TouchableOpacity onPress={pwdvisible}>
              <View style={signinStyle.eyeimage}>
                <Image style={signinStyle.eyepimage} source={passwordVisible ? hide : view} />
              </View>
            </TouchableOpacity>
        </View>
        <View>
            <Text style={signinStyle.errortext}>{errors1.password}</Text>
          </View>
        <View style={signinStyle.SquareButton}>
          <SquareButton label="Login" onPress={handleSubmit} />
        </View>
        <View>
          <View style={signinStyle.forgotView}>
            <TouchableOpacity  onPress={() => navigation.navigate('Forgot')}>
              <Text style={signinStyle.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={signinStyle.horizontalLine} />
          <Text style={signinStyle.orText}>OR </Text>
          <View style={signinStyle.horizontalLine2} />
        </View>
        <View style={signinStyle.sortbuttonView}>
          <SortButton source={fb} label="Facebook" />
        </View>
        <View style={signinStyle.sortbuttonViewright}>
          <SortButton source={google} label="Google"  />
        </View>
        <View style={signinStyle.donttextView}>
          <View style={signinStyle.alreadyTextView}>
            <Text style={signinStyle.alreadyText}>Don't have an account ?</Text>
          </View>

          <View style={signinStyle.SignUpTextView}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Registration')}>
              <Text style={signinStyle.SignUpText}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View>
            <Text style={signinStyle.byText}>
              By continuing you agree to our
            </Text>
          </View>
          <View style={signinStyle.policyview}>
            <Text style={signinStyle.termText}>Term of service </Text>
            <Text style={signinStyle.privacyText}>Privacy Policy</Text>
            <Text style={signinStyle.contentText}>Content Policy</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
