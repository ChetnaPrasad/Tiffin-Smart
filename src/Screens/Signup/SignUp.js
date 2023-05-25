import React, {useState} from 'react';
import {View, Text,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {signupStyle} from './SignupStyle';
import Input from '../../Componants/TextInput/TextInput';
import SquareButton from '../../Componants/Button/SqureButton';
import SortButton from '../../Componants/Button/SortButton';
import fb from '../../Assets/fb.png';
import google from '../../Assets/google.png';
import Skip from '../../Componants/Button/Skip';
import {isEmpty} from 'lodash';

export default function SignUp({navigation}){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [passwordVisible, setPasswordVisible] = useState('')
  const errors = {};
  const [errors1, setErrors] = useState({});

  const eyevisible=()=>{
    setPasswordVisible(!passwordVisible)
  }

  const validation = email => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9] {1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex =
      /^(?=.*[A-Za-z\])(?=.*[A-Za-z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{7,30}$/;
    if (!email) {
      errors.email = '* email is required';
    } else if (!emailRegex.test(email)) {
      errors.email = '* Please enter valid email';
    }

    if (!password) {
      errors.password = '* password is required';
    } else if(password.length < 6 || password.length < 8){
       errors.password="* Enter password Enter a min 8 character with at least one digit and one special characters";
    }else if (!passwordRegex.test(password)) {
      errors.password = '* Please enter the password';
    }
    
    if(!number){
      errors.number="* Number is required";
    }else if(number.length < 10){
      errors.number="* Please enter valid number";
    }

    setErrors(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validation(email, password,number);
    if (isEmpty(errors)) {
      navigation.navigate('Login');
      console.log(email, password,number);
    }
  };

  // const handleSubmit = () =>{
  //   navigation.navigate('Login');
  // }

  return (
    <View>
      <LinearGradient
        colors={['#FFDEAD', '#F99494']}
        start={{x: 1, y: 1}}
        end={{x: 1, y: 0}}
        style={signupStyle.linearGradient}>
        <View style={signupStyle.skipView}>
          <Skip style={signupStyle.skip} label="Skip" />
        </View>
        <View style={signupStyle.input}>
          <Input
            placeholder="Name"
            onChangeText={e => setName(e)}
            value={name}
          />
          <Input
            placeholder="Email"
            onChangeText={e => setEmail(e)}
            value={email}
          />
          <View>
            <Text style={signupStyle.errortext}>{errors1.email}</Text>
          </View>
          <Input
            placeholder="Password"
            onChangeText={e => setPassword(e)}
            value={password}
          />
          
          <View>
              <Text style={signupStyle.errortext}>{errors1.password}</Text>
            </View>
          <Input
            placeholder="Phone No."
            onChangeText={e => setNumber(e)}
            keyboardType={'numeric'}
            value={number}
          />
          <View>
              <Text style={signupStyle.errortext}>{errors1.number}</Text>
            </View>
        </View>
        <View style={signupStyle.SquareButton}>
          <SquareButton label="Sign Up" onPress={handleSubmit} />
        </View>
        <View>
          <View style={signupStyle.horizontalLine} />
          <Text style={signupStyle.orText}>OR </Text>
          <View style={signupStyle.horizontalLine2} />
        </View>
        <View style={signupStyle.sortbuttonView}>
          <SortButton source={fb} label="Facebook"/>
        </View>
        <View style={signupStyle.sortbuttonViewright}>
          <SortButton source={google} label="Google" />
        </View>
        <View>
          <View style={signupStyle.alreadyTextView}>
          <Text style={signupStyle.alreadyText}>
            Already have ab account ?
          </Text>
          </View>
         <View style={signupStyle.signinTextView}>
          <TouchableOpacity  onPress={()=>navigation.navigate('Login')} ><Text style={signupStyle.signinText} >Sign In</Text></TouchableOpacity> 
          </View>
        </View>
        <View>
          <View>
            <Text style={signupStyle.byText}>
              By continuing you agree to our
            </Text>
          </View>
          <View style={signupStyle.policyview}>
            <Text style={signupStyle.termText}>Term of service </Text>
            <Text style={signupStyle.privacyText}>Privacy Policy</Text>
            <Text style={signupStyle.contentText}>Content Policy</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
