import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ButtonStyle} from './ButtonStyle';

export default function SquareButton({label,onPress}) {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={ButtonStyle.buttonSquareView}>
        <View>
          <Text style={ButtonStyle.buttonSquarelabel}>{label}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
