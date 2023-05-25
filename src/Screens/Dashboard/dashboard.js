import React from "react";
import {View ,Text} from "react-native";
import { dashStyle } from "./dashStyle";

export default function Dashboard(){
  return(
    <View style={dashStyle.container}> 
        <Text style={dashStyle.text}>
            Welcome to dashboard 
        </Text>
    </View>
  )
}