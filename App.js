
import React from 'react';
import { StyleSheet, Text, View  ,SafeAreaView , StatusBar , FlatList} from 'react-native';
import HomeScreen from './src/components/screens/HomeSreens/HomeScreen';
import PostScreen from './src/components/screens/postScreen/PostScreen';

const data = [
  {
    id: '0',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
    type: 'Private Room',
    title: 'Bright room in the heart of the city',
    bed: 2,
    bedroom: 3,
    oldPrice: 25,
    newPrice: 20,
    totalPrice: 120,
    coordinate: {
      latitude: 28.3915637,
      longitude: -16.6291304,
    },
  },
  {
    id: '1',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/2.jpg',
    type: 'Entire Flat',
    title: 'NEW lux. apartment in the center of Santa Cruz',
    bed: 3,
    bedroom: 2,
    oldPrice: 76,
    newPrice: 65,
    totalPrice: 390,
    coordinate: {
      latitude: 28.4815637,
      longitude: -16.2291304,
    },
  },
  {
    id: '2',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/3.jpg',
    type: 'Private Property',
    title: 'Green House Santa Cruz',
    bed: 2,
    bedroom: 1,
    oldPrice: 64,
    newPrice: 55,
    totalPrice: 330,
    coordinate: {
      latitude: 28.2515637,
      longitude: -16.3991304,
    },
  },
  {
    id: '3',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/4.jpg',
    type: 'Entire Flat',
    title: 'Typical canarian house',
    bed: 4,
    bedroom: 3,
    oldPrice: 120,
    newPrice: 100,
    totalPrice: 600,
    coordinate: {
      latitude: 28.4815637,
      longitude: -16.2991304,
    },
  },
];

export default function App() {
  return (
    <>
      <StatusBar style="dark-content" />
      <SafeAreaView>
         {/* <HomeScreen /> */}
         <FlatList
           data={data}
           renderItem={({item}) => <PostScreen item={item} />}
           keyExtractor={item => item.id}
           showsVerticalScrollIndicator={false}
           refreshing={true}
         />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({

});