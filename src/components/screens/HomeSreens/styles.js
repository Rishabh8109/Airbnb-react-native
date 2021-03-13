import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    image : {
      width :  "100%",
      height : 400,
      justifyContent :'flex-start',
      paddingTop : 20
    },
    title : {
      fontSize : 70,
      color : "#fff",
      fontWeight : 'bold',
      width : "70%",
      marginLeft : 20
    },
    button : {
      backgroundColor : 'white',
      width : '45%',
      marginLeft  :20,
      padding : 10,
      borderRadius : 10,
      marginTop : 10
    },
    buttonTitle : {
      fontFamily : 'sans-serif',
      fontWeight : 'bold',
      textAlign : 'center'
    },
    searchButton : {
      backgroundColor : '#f0f0f0',
      width : "70%",
      display :'flex',
      flexDirection :'row',
      padding : 10,
      justifyContent :'center',
      alignItems :'center',

      marginLeft : 50,
      marginBottom : 50,
      borderRadius : 50
    },
    searchButtonTitle : {
      marginLeft: 10
    }
})