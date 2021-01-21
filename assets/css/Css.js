import {StyleSheet} from "react-native";

const css = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    container2: {
      flex: 1,
      flexDirection:'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    textPage:{
        backgroundColor: 'orange',
        padding:20
    },
    button_home:{
      marginRight: 20
    },
    btn:{
      width:50,
      height:50
    },
    darkbg:{
      backgroundColor:"#333"
    },
    login_msg:(text='none')=>({
      fontWeight:"bold",
      fontSize:22,
      color: "red",
      marginTop: 10,
      marginBottom: 15,
      display: text
    }),
    login_form:{
      width:"80%"
    },
    login_input:{
      backgroundColor:"#fff",
      fontsize:19,
      padding: 7,
      marginBottom: 15
    },
    login_button:{
      padding:12,
      backgroundColor: "#000",
      alignSelf: "center",
      borderRadius: 5
    },
    login_buttonText:{
      fontWeight: "bold",
      fontSize:20,
      color:"#333"
    }
  });
  
  export {css};