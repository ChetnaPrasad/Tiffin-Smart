import React from 'react';
import {View, Text, TouchableOpacity,Image} from 'react-native';
import {ButtonStyle} from './ButtonStyle';

export default function SortButton({label,source}) {
  return (
    <View>
      <TouchableOpacity style={ButtonStyle.buttonSortView}>
        <View style={ButtonStyle.ImageView}><Image style={ButtonStyle.Image} source={source}/></View>
        <View>
          <Text style={ButtonStyle.buttonSortlabel}>{label}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
