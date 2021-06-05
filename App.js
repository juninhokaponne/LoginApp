/* import { StatusBar } from 'expo-status-bar'; */
import React from 'react';
import {Image, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView style ={styles.background}>
      <View>
         <Image  source={require('./assets/logo.png')} /> 
        </View>

        <View>
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
      alignContent: 'center',
      justifyContent: 'center',
      backgroundColor: '#191919'
    }
})