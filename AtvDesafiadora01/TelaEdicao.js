import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function TelaEdicao({ route, navigation }) {
  const { peca, atualizarQuantidade } = route.params; // Recebe os dados da peça e a função de atualizar
  const [quantidade, setQuantidade] = useState(String(peca.quantidade)); // Estado para a nova quantidade

  // Função para salvar as alterações
  const salvarEdicao = () => {
    const novaQtd = parseInt(quantidade, 10); // Converte para número
    if (!isNaN(novaQtd)) {
      atualizarQuantidade(novaQtd); // Chama a função recebida da TelaEstoque
      navigation.goBack(); // Volta para a tela anterior
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar: {peca.nome}</Text>

      {/* Campo para digitar nova quantidade */}
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

// Estilos da tela
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
