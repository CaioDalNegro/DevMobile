import React, { useState } from 'react'; // Importa React e o hook useState para gerenciar o estado do componente.
import { View, Image, TextInput, Button, TouchableOpacity, ScrollView, FlatList, SectionList, ActivityIndicator, StyleSheet, Text } from 'react-native'; // Importa os componentes necessários da biblioteca React Native.

const App = () => {
  // Declaração de estados do componente.
  const [text, setText] = useState(''); // Estado para o texto do TextInput.
  const [imageWidth, setImageWidth] = useState(200); // Estado para a largura da imagem.
  const [isLoading, setIsLoading] = useState(false); // Estado para controlar o carregamento (loading) do ActivityIndicator.
  const [sliderValue, setSliderValue] = useState(0); // Estado para o valor do slider.

  // Dados que serão renderizados no FlatList
  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  // Dados para renderizar o SectionList (com seções)
  const sections = [
    { title: 'Section 1', data: [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }] },
    { title: 'Section 2', data: [{ id: 3, name: 'Item 3' }] },
  ];

  // Função que é chamada quando o botão é pressionado.
  const handlePress = () => {
    setIsLoading(true); // Ativa o estado de carregamento.
    setTimeout(() => {
      setIsLoading(false); // Desativa o estado de carregamento após 2 segundos.
      alert('Button pressed!'); // Exibe um alerta indicando que o botão foi pressionado.
    }, 2000);
  };

  // Retorno do componente, que define o layout.
  return (
    <ScrollView style={styles.container}>  {/* ScrollView permite rolar a tela caso o conteúdo ultrapasse a altura da tela */}
      <View style={styles.view}> {/* Um container (View) para organizar os elementos na tela */}
        <Text style={styles.text}>Hello React Native!</Text> {/* Exibe um texto na tela */}
        
        {/* Exibe a imagem com a largura dinâmica */}
        <Image
          source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }} // URL da imagem
          style={[styles.image, { width: imageWidth }]} // Aplica o estilo e define a largura da imagem
        />
        
        {/* Campo de entrada de texto */}
        <TextInput
          style={styles.textInput} // Estilo para o TextInput
          placeholder="Enter text" // Texto do placeholder
          value={text} // Valor do texto, que vem do estado 'text'
        />
        
        {/* Botão que chama a função handlePress ao ser pressionado */}
        <Button title="Press me" onPress={handlePress} />
        
        {/* TouchableOpacity que, ao ser pressionado, aumenta a largura da imagem */}
        <TouchableOpacity style={styles.touchableOpacity} onPress={() => setImageWidth(imageWidth + 50)}>
          <Text style={styles.touchableOpacityText}>Increase Image Width</Text>
        </TouchableOpacity>

        {/* Indicador de carregamento (ActivityIndicator) que fica visível enquanto o estado 'isLoading' for verdadeiro */}
        <ActivityIndicator size="large" color="#0000ff" animating={isLoading} />

        {/* Slider foi comentado, mas seria usado para ajustar o valor do sliderValue */}
        {/* 
          <Slider
            minimumValue={0}
            maximumValue={100}
            value={sliderValue}
            onValueChange={setSliderValue}
          />
        */}

        {/* Exibe o valor atual do slider */}
        <Text>Slider Value: {sliderValue.toFixed(0)}</Text>
      </View>

      {/* FlatList exibe uma lista de dados. Cada item será renderizado como um componente Text */}
      <FlatList
        data={data} // Dados a serem exibidos
        keyExtractor={(item) => item.id.toString()} // Chave única para cada item, convertendo o id para string
        renderItem={({ item }) => <Text>{item.name}</Text>} // Como renderizar cada item (nesse caso, apenas o nome)
      />

      {/* SectionList exibe uma lista com seções */}
      <SectionList
        sections={sections} // Seções a serem exibidas
        keyExtractor={(item) => item.id.toString()} // Chave única para cada item
        renderItem={({ item }) => <Text>{item.name}</Text>} // Como renderizar cada item dentro de uma seção
        renderSectionHeader={({ section: { title } }) => <Text style={styles.sectionHeader}>{title}</Text>} // Como renderizar o título de cada seção
      />
    </ScrollView>
  );
};

// Estilos do componente
const styles = StyleSheet.create({
  container: {
    flex: 1, // O container deve ocupar toda a tela
    padding: 20, // Adiciona espaçamento em torno do conteúdo
  },
  view: {
    marginBottom: 20, // Espaço entre os componentes dentro da View
  },
  text: {
    fontSize: 20, // Define o tamanho da fonte
    marginBottom: 10, // Espaço abaixo do texto
  },
  image: {
    height: 200, // Define a altura da imagem
    resizeMode: 'contain', // A imagem será ajustada para caber no espaço, sem distorção
    marginBottom: 10, // Espaço abaixo da imagem
  },
  textInput: {
    height: 40, // Altura do campo de entrada de texto
    borderColor: 'gray', // Cor da borda do TextInput
    borderWidth: 1, // Largura da borda do TextInput
    marginBottom: 10, // Espaço abaixo do TextInput
    paddingHorizontal: 10, // Espaço nas laterais dentro do TextInput
  },
  touchableOpacity: {
    backgroundColor: 'lightblue', // Cor de fundo do TouchableOpacity
    padding: 10, // Espaço interno
    borderRadius: 5, // Bordas arredondadas
    marginBottom: 10, // Espaço abaixo do botão
  },
  touchableOpacityText: {
    color: 'white', // Cor do texto dentro do botão
    textAlign: 'center', // Centraliza o texto
  },
  sectionHeader: {
    fontSize: 18, // Tamanho da fonte do título da seção
    fontWeight: 'bold', // Deixa o título em negrito
    marginTop: 20, // Espaço acima do título
    marginBottom: 10, // Espaço abaixo do título
  },
});

export default App; // Exporta o componente App como o padrão para ser utilizado em outras partes do código.
