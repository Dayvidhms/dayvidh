import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Text, View, Button, Alert } from 'react-native';
import {css} from './assets/css/Css';
import Page from './view/Page';
import {Home, Login, Rastreio} from './view';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';



export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
         name="Home"
          component={Home}
          options={{
            title: "Bem vindo!",
            headerStyle:{backgroundColor: "#000"},
            headerTintColor:'#333',
            headerTitleStyle:{fontWeight:'bold', alignSelf:'center'}
          }} />
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Rastreio" component={Rastreio}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}