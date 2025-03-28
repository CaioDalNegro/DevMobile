import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert, ActivityIndicator, StyleSheet } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loggedIn: false, 
      username: '', 
      password: '',
      nome: '',
      endereco: '',
      cidade: '',
      cep: '',
      telefone: '',
      isLoading: false
    };
  }

  handleLogin = () => {
    this.setState({ isLoading: true });

    // Simulação de login
    setTimeout(() => {
      this.setState({ loggedIn: true, isLoading: false });
    }, 1000);
  };

  handleVoltar = () => {
    this.setState({ loggedIn: false, username: '', password: '' });
  };

  imprimirDados = () => {
    const { username, password, nome, endereco, cidade, cep, telefone } = this.state;

    Alert.alert(
      "Dados Cadastrados",
      `Usuário: ${username}\nSenha: ${password}\nNome: ${nome}\nEndereço: ${endereco}\nCidade: ${cidade}\nCEP: ${cep}\nTelefone: ${telefone}`
    );
  };

  render() {
    const { loggedIn, isLoading } = this.state;

    return (
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : loggedIn ? (
          <>
            <Text style={styles.title}>Cadastro</Text>
            <TextInput style={styles.input} placeholder="Nome" onChangeText={(nome) => this.setState({ nome })} />
            <TextInput style={styles.input} placeholder="Endereço" onChangeText={(endereco) => this.setState({ endereco })} />
            <TextInput style={styles.input} placeholder="Cidade" onChangeText={(cidade) => this.setState({ cidade })} />
            <TextInput style={styles.input} placeholder="CEP" onChangeText={(cep) => this.setState({ cep })} />
            <TextInput style={styles.input} placeholder="Telefone" onChangeText={(telefone) => this.setState({ telefone })} />
            <View style={styles.buttonContainer}>
              <Button title="Imprimir" onPress={this.imprimirDados} />
              <Button title="Voltar" onPress={this.handleVoltar} />
            </View>
          </>
        ) : (
          <>
            <Text style={styles.title}>Login</Text>
            <TextInput style={styles.input} placeholder="Usuário" onChangeText={(username) => this.setState({ username })} />
            <TextInput style={styles.input} placeholder="Senha" secureTextEntry onChangeText={(password) => this.setState({ password })} />
            <Button title="Entrar" onPress={this.handleLogin} />
          </>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'white'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});
