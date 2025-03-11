import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OlaPerfilFuncao = ({ nome, endereco, telefone }) => {
  return (
    <View style={styles.perfilContainer}>
      <Text style={styles.perfilTexto}>Nome: {nome}</Text>
      <Text style={styles.perfilTexto}>Endereço: {endereco}</Text>
      <Text style={styles.perfilTexto}>Telefone: {telefone}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  perfilContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  perfilTexto: {
    fontSize: 16,
  },
});

export default OlaPerfilFuncao;
