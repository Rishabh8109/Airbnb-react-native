import React from 'react'
import { View, Text } from 'react-native'
import {styles} from './styles';

const SuggestionRow = ({item , navigation}) => {
  console.log(item);
  return (
    <TouchableOpacity activeOpacity={.6} onPress={() => navigation.navigate('places')}>
      <View style={styles.feedContainer}>
      <Entypo name="location-pin" size={25} color="#000" style={styles.locationIcon}/>
      <Text key={item.id}>{item.description}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default SuggestionRow;
