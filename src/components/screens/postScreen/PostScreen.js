import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { AppLoading } from "expo-app-loading";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import Feather from "react-native-vector-icons/Feather";

const PostScreen = ({ item }) => {
  let [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {/* {post image} */}
        <TouchableOpacity activeOpacity={0.7}>
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.image}
          />
        </TouchableOpacity>
        {/* {heart iccon}  */}
        <Feather
          name="heart"
          color="#f0f0f0"
          size={20}
          style={styles.favIcon}
        />
        {/* {avalailble badrooms} */}
        <Text
          style={{
            fontSize: 12,
            color: "#000",
            opacity: 0.6,
            fontFamily: "Montserrat_500Medium",
            marginVertical: 5,
          }}
        ><PostScreen item={item} />
          ${item.bed} bed {item.bedroom} bedroom
        </Text>
        {/* {title} */}
        <Text style={{ fontSize: 15, fontFamily: "Montserrat_500Medium" }}>
          {item.title}
        </Text>
        {/* {old price * new Price} */}
        <View style={styles.prices}>
          <Text style={styles.oldPrice}>${item.oldPrice}</Text>
          <Text style={styles.newPrice}>${item.newPrice} /night</Text>
        </View>
      </View>
    );
  }
};

export default PostScreen;
