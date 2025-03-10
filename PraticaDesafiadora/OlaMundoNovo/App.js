import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import OlaPerfilFuncao from './componentes/OlaPerfilFuncao';
import OlaPerfilClasse from './componentes/OlaPerfilClasse';

export default function App() {
  return (
    <View style={styles.container}>
      <OlaPerfilFuncao/> {/*Retorna o componente OlaPerfilFuncao */}

      <OlaPerfilClasse 
      nome = 'Caio'
      endereco = 'Rua eterno 11x0'
      telefone = '(16)99632-2651'
      /> {/*Retorna o componente OlaPerfilClasse */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
