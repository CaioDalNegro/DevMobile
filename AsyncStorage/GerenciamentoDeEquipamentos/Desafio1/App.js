import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, ScrollView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [local, setLocal] = useState('');

  const salvarEquipamento = async () => {
    if (!id || !nome || !local) {
      Alert.alert("Preencha todos os campos.");
      return;
    }

    const equipamento = {
      id,
      nome,
      local,
    };

    try {
      await AsyncStorage.setItem(id, JSON.stringify(equipamento));
      Alert.alert("Equipamento salvo com sucesso!");
      limparCampos();
    } catch (error) {
      Alert.alert("Erro ao salvar o equipamento.");
    }
  };

  const carregarEquipamento = async () => {
    if (!id) {
      Alert.alert("Informe o ID para buscar.");
      return;
    }

    try {
      const jsonValue = await AsyncStorage.getItem(id);
      if (jsonValue != null) {
        const equipamento = JSON.parse(jsonValue);
        setNome(equipamento.nome);
        setLocal(equipamento.local);
        Alert.alert("Equipamento carregado com sucesso!");
      } else {
        Alert.alert("Equipamento não encontrado.");
      }
    } catch (error) {
      Alert.alert("Erro ao carregar o equipamento.");
    }
  };

  const alterarEquipamento = async () => {
    await salvarEquipamento();
  };

  const removerEquipamento = async () => {
    if (!id) {
      Alert.alert("Informe o ID para remover.");
      return;
    }

    try {
      await AsyncStorage.removeItem(id);
      Alert.alert("Equipamento removido com sucesso!");
      limparCampos();
    } catch (error) {
      Alert.alert("Erro ao remover o equipamento.");
    }
  };

  const limparCampos = () => {
    setId('');
    setNome('');
    setLocal('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>TechFix - Gestão de Equipamentos</Text>

      <TextInput
        style={styles.input}
        placeholder="ID do Equipamento"
        value={id}
        onChangeText={setId}
      />

      <TextInput
        style={styles.input}
        placeholder="Nome do Equipamento"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Local de Instalação"
        value={local}
        onChangeText={setLocal}
      />

      <View style={styles.buttonContainer}>
        <Button title="Salvar" onPress={salvarEquipamento} />
        <Button title="Carregar" onPress={carregarEquipamento} />
        <Button title="Alterar" onPress={alterarEquipamento} />
        <Button title="Remover" onPress={removerEquipamento} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    flexGrow: 1,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    marginVertical: 8,
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  buttonContainer: {
    marginTop: 20,
    gap: 10,
  },
});
