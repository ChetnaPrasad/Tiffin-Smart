import React, { useState } from "react";
import {View,Text,TextInput} from "react-native";
import { InputStyle } from "./InputStyle";

export default function Input({onChangeText,placeholder, value, secureTextEntry,autoCorrect,keyboardType}){
    const[focus , setFocus]= useState(false)
    return(
        <View>

        <View>
        <TextInput
        style={InputStyle.input}
        onChangeText={onChangeText}
        value={value}
        onFocus={() => setFocus(true)}
        secureTextEntry={secureTextEntry}
        autoCorrect={autoCorrect}
        placeholder={placeholder}
        placeholderTextColor = "black"
        keyboardType={keyboardType} 
        placeholderStyle={InputStyle.somePlaceholderStyle}
      />
      </View>
        </View>
    )
}