import React, {useState, useEffect} from 'react';
import {KeyboardAvoidingView, Text, TextInput, Image, View, TouchableOpacity, Platform} from 'react-native';
import {css} from '../assets/css/Css';

export default function Login(){
    const[display, setDisplay]=useState('none');

    return(
        <KeyboardAvoidingView 
            behaviour={Platform.OS=="ios"?"padding":"height"}
            style={[css.container, css.darkbg]}>
            <View>
                <Image source={require('../assets/img/notesicon.png')}/>
            </View>

            <View>
                <Text style={css.login_msg(display)}>Usuário ou senha inválidos.</Text>
            </View>

            <View style={css.login_form}>
                <TextInput style={css.login_input} placeHolder="Usuário"/>
                
                <TextInput style={css.login_input} placeHolder="Senha" secureTextEntry={true}/>
                <TouchableOpacity style={css.login_button}>
                    <Text style={css.login_buttonText}>Entrar!</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}