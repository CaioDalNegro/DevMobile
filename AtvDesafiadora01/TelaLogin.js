import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    //VARIAVEIS CRIADAS PARA SIMULAÇÃO DO USUARIO-------------------------->
    this.state = {
      username: '',
      password: '',
      isLoading: false,
      recoveringPassword: false,
      email: 'caio@gmail.com'
    };
  }

  //AO SELECIONAR O BOTÃO DE LOGIN, ELE VERIFICA SE A SENHA E USUARIO ESTAO DE ACORDO E NAVEGA PARA A TELA ESTOQUE----->
  handleLogin = () => {
    const { username, password } = this.state;

    if (username === 'adm' && password === 'senai') {
      this.setState({ isLoading: true });

      setTimeout(() => {
        this.setState({ isLoading: false });
        this.props.navigation.navigate('TelaEstoque');
      }, 1000);
    } else {
      Alert.alert('Erro', 'Usuário ou senha incorretos!');
    }
  };

  handleRecuperarSenha = () => {
    this.setState({ recoveringPassword: true });
  };

  handleVoltar = () => {
    this.setState({ recoveringPassword: false });
  };

  render() {
    const { isLoading, recoveringPassword, email } = this.state;

    if (isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }

    if (recoveringPassword) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Recuperação de Senha</Text>{/*TEXTO EXIBINDO MENSAGEM*/}
          <Text style={styles.mensagem}>
            Enviamos um link de recuperação para seu e-mail:
          </Text>
          <Text style={styles.email}>{email}</Text>
          <Button title="Voltar" onPress={this.handleVoltar} />
        </View>
      );
    }

    //RETORNA A TELA DE LOGIN DO APP----------------------------------------->
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          onChangeText={(username) => this.setState({ username })}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          onChangeText={(password) => this.setState({ password })}
        />
        <TouchableOpacity onPress={this.handleRecuperarSenha}>
          <Text style={styles.recuperar}>Esqueceu a senha?</Text>
        </TouchableOpacity>
        <Button style={styles.button} title="Entrar" onPress={this.handleLogin} />
      </View>
    );
  }
}

//SCRIPTS PARA ESTILO DO APP----------------------------------------------->
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#5A5A5A',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  recuperar: {
    color: '#add8e6',
    textAlign: 'right',
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
  mensagem: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  email: {
    color: '#00BFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
});
