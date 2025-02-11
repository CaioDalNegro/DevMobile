//importa os componentes do React native
import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  {/*Pede para digitar o nome do usuário*/}
  const lidarComClique = () => { //espera lidar com clique
    if (nome) {
      setMensagem(`Olá, ${nome}!`);
    } else {
      setMensagem('Por favor, digite seu nome.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }}
        style={styles.logo}
      />
      <Text style={styles.titulo}>Exemplo Interativo</Text>
      
      {/*Campo de entrada de texto*/}
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        onChangeText={setNome}
        value={nome}
      />
      <Button title="Enviar" onPress={lidarComClique} />
      {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}
    </View>
  );
};

//Estilos para componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  mensagem: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default App;
