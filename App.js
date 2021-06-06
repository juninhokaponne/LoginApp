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
            style={styles.input}
            placeholder = "Email"          // mascara para email 
            autoCorrect = {false}          // Para corretor não funcionar
            onChangeText = {() =>{}} // Não vai persistir dados em nenhum local
          />

          <TextInput
              style={styles.input}
              autoCapitalize="none"
              placeholder = "Senha"          // mascara para email 
              autoCorrect = {false}          // Para corretor não funcionar
              onChangeText = {() =>{}} // Não vai persistir dados em nenhum local
              secureTextEntry={true}
          />

          <TouchableOpacity style={styles.btnSubmit}>
            <Text style={styles.submitText}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity  style={styles.btnRegister}>
            <Text style={styles.registerText}>Criar conta </Text>
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
      backgroundColor: '#9400D3'
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
      paddingBottom: 10
    },
    input:{
      backgroundColor: '#FFF',
      width: '90%',
      height: '15%',
      marginBottom:15,
      color: '#221',
      fontSize: 17,
      borderRadius:7,
      padding:10,
    },
    btnSubmit: {
      backgroundColor:'#3CB371',
      width:'90%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7
    },
    submitText: {
      color:'#FFF',
      fontSize:18,
    },
    btnRegister:{
      marginTop:10,
    },
    registerText:{
      color:'#FFF',
    },
   /*  forma: {
      flex:1,
      height:55,
      width:'90%',
      backgroundColor: '#9932CC',
      borderRadius:90,
      marginLeft:300,
      marginTop:20,
    } */
});