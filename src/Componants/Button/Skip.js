import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ButtonStyle} from './ButtonStyle';

export default function Skip({label}) {
  return (
    <View>
      <TouchableOpacity style={ButtonStyle.skipView}>
        <View>
          <Text style={ButtonStyle.skiplabel}>{label}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
