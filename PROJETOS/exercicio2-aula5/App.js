import logox from './assets/img/NativeLogo.png';
import React, { useState } from 'react';  // Importa React e useState para manipulação de estado
import { View, Text, Image, TextInput, Button, TouchableOpacity, ScrollView, FlatList, StyleSheet } from 'react-native';  // Importa os componentes do React Native necessários

const App = () => {  // Função principal do componente.
  // Declara o estado para controlar o texto e a lista de itens
  const [text, setText] = useState('');
  const [items, setItems] = useState([
    { id: '1', name: 'item 1' },
    { id: '2', name: 'item 2' },
    { id: '3', name: 'item 3' },
  ]);

  // Função constante chamada quando o botão é pressionado, exibindo um alerta
  const handlePress = () => {
    alert('Botão pressionado');
  };

  // Função que adiciona um novo item à lista com o texto digitado
  const addItem = () => {
    setItems([...items, { id: Date.now().toString(), name: text }]);
    setText('');  // Limpa o campo de texto após adicionar o item
  };

  return (
    <ScrollView style={styles.container}>  {/* O ScrollView permite que a tela role quando o conteúdo for maior que a área visível*/}
      <View style={styles.header}>  {/* Container do cabeçalho com logo e título */}
      <Image 
        source={{ uri: logox }} 
        style={styles.image} 
      />
        <Text style={styles.title}>Exmplo de App React Native</Text>  {/*Título da página*/}
      </View>

      {/* Componente de input para digitar o nome do novo item*/}
      <TextInput
        style={styles.input}
        placeholder="Digite algo"
        value={text}  // O valor é o estado text
        onChangeText={setText}  // Atualiza o estado text sempre que o texto muda
      />

      {/* Botão para adicionar um novo item à lista*/}
      <Button title="Adicionar Item" onPress={addItem} />

      {/* FlatList exibe a lista de itens. */}
      <FlatList
        data={items}  // Passa os itens para o FlatList.
        renderItem={({ item }) => (  // Função para renderizar cada item da lista
          <View style={styles.item}>
            <Text>{item.name}</Text>  {/* Exibe o nome do item.*/}
          </View>
        )}
        keyExtractor={(item) => item.id}  // Cada item precisa de uma chave única
      />

      {/* Botão TouchableOpacity que, ao ser pressionado, chama a função handlePress */}
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Pressione-me</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Estilos para o layout da interface--------------------------------------------------->
const styles = StyleSheet.create({
  container: {
    flex: 1,  // O container ocupa toda a tela.
    padding: 20,  // Adiciona um espaçamento de 20 unidades em torno de todos os elementos.
  },
  header: {
    alignItems: 'center',  // Centraliza os itens dentro do cabeçalho.
    marginBottom: 20,  // Espaçamento abaixo do cabeçalho.
  },
  image: {
    width: 100,  // Largura da imagem.
    height: 100,  // Altura da imagem.
    marginBottom: 10,  // Espaçamento abaixo da imagem.
  },
  title: {
    fontSize: 24,  // Tamanho da fonte do título.
    fontWeight: 'bold',  // Deixa o título em negrito.
  },
  input: {
    height: 40,  // Altura do campo de input.
    borderColor: 'gray',  // Cor da borda do campo de input.
    borderWidth: 1,  // Largura da borda do campo de input.
    marginBottom: 10,  // Espaçamento abaixo do campo de input.
    paddingHorizontal: 10,  // Espaçamento interno horizontal para o texto.
  },
  item: {
    backgroundColor: 'blue',  // Cor de fundo azul para cada item da lista.
    padding: 10,  // Preenchimento interno para o item da lista.
    marginBottom: 5,  // Espaçamento entre os itens da lista.
  },
  button: {
    backgroundColor: 'blue',  // Cor de fundo azul para o botão.
    padding: 10,  // Preenchimento interno do botão.
    alignItems: 'center',  // Centraliza o texto dentro do botão.
  },
  buttonText: {
    color: 'white',  // Cor do texto do botão.
    fontSize: 16,  // Tamanho da fonte do texto do botão.
  },
});

export default App;  // Exporta o componente App como padrão.
