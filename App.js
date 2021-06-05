/* import { StatusBar } from 'expo-status-bar'; */
import React from 'react';
import {Image, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView style ={styles.background}>
      <View style = {styles.containerLogo}>
         <Image  source={require('./assets/logo.png')} /> 
        </View>

        <View style={styles.container}>
          <TextInput
            placeholder = "Email"          // mascara para email 
            autoCorrect = {false}          // Para corretor não funcionar
            onChangeText = {() =>{}} // Não vai persistir dados em nenhum local
          />

          <TextInput
              placeholder = "Senha"          // mascara para email 
              autoCorrect = {false}          // Para corretor não funcionar
              onChangeText = {() =>{}} // Não vai persistir dados em nenhum local
          />

          <TouchableOpacity>
            <Text>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text>Criar conta </Text>
          </TouchableOpacity>

        </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create ({
    background: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#191919'
    },
    containerLogo: {
      flex:1,
      justifyContent: 'center',
    },
    container: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
    }
});