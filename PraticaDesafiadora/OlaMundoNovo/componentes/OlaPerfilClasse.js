import { Text, View } from 'react-native';
import React, { Component } from 'react';

export default class PerfilClasse extends Component {
  render() {
    const { nome, endereco, telefone } = this.props;  // Desestruturando props

    return (
      <View>
        <h1>Perfil Classe</h1>
        <Text>Nome: {nome}</Text>
        <Text>Endereço: {endereco}</Text>
        <Text>Telefone: {telefone}</Text>
      </View>
    );
  }
}
