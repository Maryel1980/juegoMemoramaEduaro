import React, { Component } from 'react';
import { Text, View, Alert, SafeAreaView, StatusBar, Platform,
ImageBackground, StyleSheet, Image, FlatList, Dimensions} from 'react-native';

export default class Como_Jugar extends Component{
  render(){
    return(
      <View>
        <ImageBackground source={require('../assets/bg3.jpg')} style={{flex:1, resizeMode:"cover"}} >
          <View>
            <Text style={{fontSize:30, marginTop:25, color:"black", marginLeft: 75}}>Como jugar</Text>
          </View>
          <View>
            <Text style={{fontSize:25, marginTop:25, color:"white", marginLeft:15}}>Un jugador escoge dos cartas, si las dos que escogió son iguales, se las queda consigo y tiene derecho a escoger otras dos;
si las dos cartas que escogió son diferentes las coloca otra vez boca abajo en el mismo lugar y procura recordar cualescartas eran.</Text>
          </View>
        </ImageBackground>
      </View>
    )
  }
}