import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function AppForm() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Item para comprar</Text>
      <View style={styles.inputContainer}> 
        <TextInput 
          style={styles.input} 
          placeholder="O que está faltando em casa?"
          clearButtonMode="always" /> 
        <TextInput 
          style={styles.input}  
          placeholder="Digite a quantidade" 
          keyboardType={'numeric'}
          clearButtonMode="always" /> 
        <TouchableOpacity style={styles.button}> 
          <Text style={styles.buttonText}>Salvar</Text> 
        </TouchableOpacity> 
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D93600',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
