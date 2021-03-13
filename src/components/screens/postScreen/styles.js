import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container : {
    margin : 10
  },
  image : {
    width :'100%',
    aspectRatio : 3 /2,
    resizeMode :'cover',
    borderRadius : 10,
   marginBottom : 10,
   position :'relative'
  },
  prices :{
    display : 'flex',
    flexDirection :'row',
    width : 100,
    justifyContent :'space-between',
    marginTop : 5
  },
  oldPrice :{
    fontFamily : 'Montserrat_700Bold',
    textDecorationLine :'line-through',
    opacity : .4,
    color : '#000'
  },
   newPrice :{
    fontFamily : 'Montserrat_700Bold',
    marginLeft : 8
  },
  favIcon : {
    position :'absolute',
    top : 10,
    right : 20
  }
})