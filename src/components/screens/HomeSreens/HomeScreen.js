import React from 'react'
import { StyleSheet, Text, View , ImageBackground, Pressable, TextInput } from 'react-native'
import {styles} from './styles';
import Feather from 'react-native-vector-icons/Feather'

export default function HomeScreen() {
  return (
    <View>
       <ImageBackground
         source={require("../../../../assets/wallpaper.jpg")}
          style={styles.image}
          resizeMode="cover"
       >

        {/* {search button} */}
        <Pressable  style={styles.searchButton}>
           <Feather name="search" size={20} color="#f54327" />
           <Text style={styles.searchButtonTitle}>Where are you going ?</Text>
        </Pressable>
        {/* {title} */}
        <Text style={styles.title}>Go Near</Text>

        {/* {expore button} */}
        <Pressable
          style={styles.button}
        >
          <Text style={styles.buttonTitle}>Explore nearby place</Text>
        </Pressable>
       </ImageBackground>
    </View>
  )
}

