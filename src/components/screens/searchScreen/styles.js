import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  searchInput : {
     padding: 10,
     margin: 10,
     backgroundColor : "#fcfcfc",
     borderColor : 'transparent',
     borderWidth : 1,
     borderRadius : 10
  },
  feedContainer: {
    display :'flex',
    flexDirection : 'row',
    justifyContent : 'flex-start',
    alignItems : 'center',
    paddingHorizontal : 5,
    backgroundColor : '#fff',
    borderBottomColor : "lightgrey",
    borderBottomWidth : .3,
    paddingVertical : 5
  },
  locationIcon: {
    padding : 10,
    backgroundColor : '#f3f5f2',
    margin : 5,
    borderRadius : 7
  }
})