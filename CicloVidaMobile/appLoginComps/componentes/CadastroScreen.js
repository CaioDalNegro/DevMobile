import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

class CadastroScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      endereco: '',
      cidade: '',
      cep: '',
      telefone: ''
    };
  }

  // Função para validar os campos e imprimir os dados
  imprimirDados = () => {
    const { nome, endereco, cidade, cep, telefone } = this.state;

    if (!nome || !endereco || !cidade || !cep || !telefone) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    const { username, password } = this.props;

    Alert.alert(
      "Dados Cadastrados",
      `Usuário: ${username}\nSenha: ${password}\nNome: ${nome}\nEndereço: ${endereco}\nCidade: ${cidade}\nCEP: ${cep}\nTelefone: ${telefone}`
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Cadastro</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          onChangeText={(nome) => this.setState({ nome })}
        />
        <TextInput
          style={styles.input}
          placeholder="Endereço"
          onChangeText={(endereco) => this.setState({ endereco })}
        />
        <TextInput
          style={styles.input}
          placeholder="Cidade"
          onChangeText={(cidade) => this.setState({ cidade })}
        />
        <TextInput
          style={styles.input}
          placeholder="CEP"
          onChangeText={(cep) => this.setState({ cep })}
        />
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          keyboardType="phone-pad"
          onChangeText={(telefone) => this.setState({ telefone })}
        />
        <View style={styles.buttonContainer}>
          <Button title="Imprimir" onPress={this.imprimirDados} />
          <Button title="Voltar" onPress={this.props.onVoltar} />
        </View>
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

export default CadastroScreen;
