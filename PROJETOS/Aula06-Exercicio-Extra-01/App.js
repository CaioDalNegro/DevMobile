import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SectionList,
  ActivityIndicator,
  Slider,
  Switch,
  ImageBackground,
  Modal,
  StyleSheet,
} from 'react-native';

// Componente principal do aplicativo
const App = () => {
  // Estado para armazenar o texto inserido no TextInput
  const [text, setText] = useState('');

  // Estado para armazenar a fonte da imagem
  const [imageSource, setImageSource] = useState(require('./sua_imagem.jpg'));

  // Estado para controlar o carregamento
  const [isLoading, setIsLoading] = useState(false);

  // Estado para controlar o valor do Slider
  const [sliderValue, setSliderValue] = useState(0);

  // Estado para controlar o Switch
  const [switchValue, setSwitchValue] = useState(false);

  // Estado para controlar a visibilidade do Modal
  const [modalVisible, setModalVisible] = useState(false);

  // Dados para a FlatList
  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  // Dados para a SectionList
  const sections = [
    {
      title: 'Seção 1',
      data: [
        { id: 1, name: 'Item A' },
        { id: 2, name: 'Item B' },
      ],
    },
    { title: 'Seção 2', data: [{ id: 3, name: 'Item C' }] },
  ];

  // Função para tratar o clique no botão
  const handleButtonPress = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setModalVisible(true);
    }, 2000); // Simula um carregamento de 2 segundos
  };

  return (
    <ScrollView style={styles.container}>
      {/* Imagem de fundo */}
      <ImageBackground
        source={require('./background.jpg')}
        style={styles.imageBackground}
      >
        <Text style={styles.title}>Exemplo de Componentes Interativos</Text>
      </ImageBackground>

      <View style={styles.content}>
        {/* Exibição de imagem */}
        <Image source={imageSource} style={styles.image} />

        {/* Campo de entrada de texto */}
        <TextInput
          style={styles.input}
          placeholder="Digite algo..."
          onChangeText={setText}
          value={text}
        />

        {/* Botão simples */}
        <Button title="Pressione" onPress={handleButtonPress} />

        {/* Botão estilizado com TouchableOpacity */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('Botão pressionado')}
        >
          <Text style={styles.buttonText}>TouchableOpacity</Text>
        </TouchableOpacity>

        {/* Indicador de carregamento */}
        <ActivityIndicator animating={isLoading} />

        {/* Slider para selecionar um valor */}
        <Slider
          minimumValue={0}
          maximumValue={100}
          value={sliderValue}
          onValueChange={setSliderValue}
        />
        <Text>Valor do Slider: {sliderValue}</Text>

        {/* Switch para alternar valores */}
        <Switch value={switchValue} onValueChange={setSwitchValue} />
        <Text>Valor do Switch: {switchValue ? 'Ligado' : 'Desligado'}</Text>

        {/* Lista de itens simples */}
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />

        {/* Lista agrupada em seções */}
        <SectionList
          sections={sections}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
        />
      </View>

      {/* Modal exibido ao pressionar o botão */}
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text>Modal Aberto!</Text>
          <Button title="Fechar" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </ScrollView>
  );
};

// Estilos do aplicativo
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
