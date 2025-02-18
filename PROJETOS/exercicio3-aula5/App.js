import React, { useState } from 'react';// Importa React e useState para manipulação de estado
import { View, Text, Image, TextInput, Button, TouchableOpacity, ScrollView, FlatList, SectionList, StyleSheet } from 'react-native';// Importa os componentes do React Native necessários

const App = () => { // Função principal do componente
  // Declara o estado para controlar o texto e o envio de mensagens
  const [text, setText] = useState('');
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
  ]);

  const sections = [
    {
      title: 'Seção 1',
      data: [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }],
    },
    {
      title: 'Seção 2',
      data: [{ id: 3, name: 'Item 3' }, { id: 4, name: 'Item 4' }],
    },
  ];

  const handlePress = () => {
    if (text.trim() === '') return; // Evita adicionar itens vazios
    setItems([...items, { id: items.length + 1, name: text }]); // Adiciona um novo item
    setText(''); // Limpa o campo após adicionar
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>Texto de exemplo</Text>
        <Image
          source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }}
          style={styles.image}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Digite algo"
          onChangeText={setText}
          value={text}
        />
        <Button title="Clique aqui" onPress={handlePress} />
      </View>
      <FlatList
        data={items}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
      <SectionList
        sections={sections}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  view: {
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  TextInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  sectionHeader: {
  fontSize: 18,
  fontWeight: 'bold',
  marginTop: 20,
  marginBottom: 10,
  },
});

export default App;