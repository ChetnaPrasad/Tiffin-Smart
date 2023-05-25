import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ButtonStyle} from './ButtonStyle';

export default function Button({label}) {
  return (
    <View>
      <TouchableOpacity style={ButtonStyle.buttonView}>
        <View>
          <Text style={ButtonStyle.buttonlabel}>{label}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
