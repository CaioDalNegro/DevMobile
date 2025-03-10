import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function(props) {
  return (
    <View>
      <Text>Nome: {props.nome}</Text>
      <Text>Endereço: {props.endereco}</Text>
      <Text>Telefone: {props.telefone}</Text>
    </View>
  );
}