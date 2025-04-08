import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function TelaEdicao({ route, navigation }) {
  const { peca, atualizarQuantidade } = route.params;
  const [quantidade, setQuantidade] = useState(String(peca.quantidade))

  const salvarEdicao = () => {
    const novaQtd = parseInt(quantidade, 10); // CONVERTE PARA NUMERO
    if (!isNaN(novaQtd)) {
      atualizarQuantidade(novaQtd); // CHAMA A FUNÇÃO DA TELA ESTOQUE
      navigation.goBack(); // VOLTA PARA A TELA ANTERIOR
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar: {peca.nome}</Text>

      {/* CAMPO PARA EDITAR A QUANTIDADE*/}
      <TextInput
        style={styles.input}
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />

      <Button title="Salvar" onPress={salvarEdicao} />
      <Button title="Cancelar" color="red" onPress={() => navigation.goBack()} />
    </View>
  );
}

// ESTILOS DA TELA EDIÇÃO---------------------------------------------------------->
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#5A5A5A',
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    fontSize: 18,
    marginBottom: 20,
    borderRadius: 10,
  },
});
