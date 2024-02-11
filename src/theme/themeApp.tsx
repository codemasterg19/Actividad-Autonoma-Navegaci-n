import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    container: {
        
        justifyContent: 'center',
        alignItems: 'center',
         
      },
    textInicio:{
        fontSize: 25,
        fontWeight: 'bold',
        textAlign:'center',
        color: '#24e5d9',
        margin:40,
        padding:10,

        
    },
    button: {
        backgroundColor: '#24e5d9',
        padding: 15,
        borderRadius: 15,
        margin: 10,
        elevation: 5,
      },
      buttonText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
      },
      inputText:{
        backgroundColor: 'white',
        paddingHorizontal:20,
        borderRadius:10,
        margin:8,
    },
    image:{
        width: 300,
        height: 200,
        borderRadius: 10,
        borderWidth: 2,
        alignItems: 'center',
        borderColor: 'white',
        shadowColor: '#2b53fa',
        padding:20,
        margin:30,
  
      },
      resultText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#27ae60',
        marginTop: 16,
        textAlign: 'center'
      },




    
})