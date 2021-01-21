import React from 'react';
import {Text, View, Button, TouchableOpacity, Image} from 'react-native';
import {css} from '../assets/css/Css';


export default function Home(props){
    console.log(props);
    return(
        <View style={css.container2}>

            <TouchableOpacity style={css.button_home}
                onPress={()=>props.navigation.navigate('Rastreio')}>
                    <Image style={css.btn} source={require('../assets/img/notesicon.png')}></Image>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={()=>props.navigation.navigate('Login',{id:30})}>
                        <Image style={css.btn} source={require('../assets/img/notesicon.png')}></Image>
                </TouchableOpacity>
        </View>
    );
}