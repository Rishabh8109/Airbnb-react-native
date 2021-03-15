import React , {useState} from 'react'
import { View, Text, TextInput , FlatList, TouchableOpacity} from 'react-native'
import { styles } from './styles';
import searchFeed from '../../../data/search';
import Entypo from 'react-native-vector-icons/Entypo';



const DestinationSearchScreen = ({navigation}) => {

  const [searchValue, setserachValue] = useState(null);
  const searchFeeds = e  => {
   setserachValue(
    searchFeed.filter(state => {
      const regVal = new RegExp(`${e.nativeEvent.text}` , 'gm');
      if(e.nativeEvent.text === "") {
        setserachValue(null);
      } else {
        return state.description.match(regVal);
      }
    })
   )
  }

  return (
    <View>
      <TextInput
        placeholder="search places"
        style={styles.searchInput}
        caretHidden={false}
        onChange={searchFeeds}
      />
      {
        searchValue && (
          <>
            <FlatList
              data={searchValue}
              renderItem={({item}) => (
                 <TouchableOpacity activeOpacity={.6} onPress={() => navigation.navigate('places')}>
                    <View style={styles.feedContainer}>
                    <Entypo name="location-pin" size={25} color="#000" style={styles.locationIcon}/>
                    <Text key={item.id}>{item.description}</Text>
                   </View>
                 </TouchableOpacity>
              )}
              keyExtractor={item => item.id}
            />
          </>
        )
      }
    </View>
  )
}

export default DestinationSearchScreen;

