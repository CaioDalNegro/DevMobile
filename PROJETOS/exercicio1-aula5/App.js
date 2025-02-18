import React, { useState } from 'react'; // Importa React e useState para manipulação de estado
import {View, Text, Image, TextInput, Button, TouchableOpacity, ScrollView, StyleSheet,} from 'react-native';// Importa os componentes do React Native necessários

const App = () => { // Função principal do componente.
  // Declara o estado para controlar o texto e o envio de mensagens
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

    // Função constante chamada quando o botão é pressionado, exibindo um ola e o nome
  const lidarComClique = () => {
    if (nome) {
      setMensagem(`Olá, ${nome}!`);
    }
  };

  return (
    <ScrollView style={styles.container}>{/* O ScrollView permite que a tela role quando o conteúdo for maior que a área visível*/}
      <View style={styles.view}>{/* Container do cabeçalho com logo e título */}
        <Image source={'./assets/img/NativeLogo.png'} style={styles.image} /> {/*Título da página*/}
        <Text style={styles.text}>
          Exemplo de elementos gráficos interativos em React Native
        </Text>
      </View>

      <View style={styles.inputContainer}>
        {/* Componente de input para digitar o seu nome*/}
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          onChangeText={setNome}
          value={nome}
        />
        {/* Botão para enviar a mensagem*/}
        <Button title="Enviar" onPress={lidarComClique} />
      </View>
      
      {mensagem ? (
        <View style={styles.messageContainer}>
          <Text style={styles.message}>{mensagem}</Text>
        </View>
      ) : null}

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>{mensagem || 'Clique aqui'}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Estilos para o layout da interface--------------------------------------------------->
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  view: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  messageContainer: {
    marginTop: 10,
  },
  message: {
    fontSize: 16,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
