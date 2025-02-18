import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, TouchableOpacity, ScrollView, FlatList, SectionList, ActivityIndicator, StyleSheet} from 'react-native';

const App = () => {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handlePress = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Botão pressionado');
    }, 2000);
  };

  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  const sections = [
    {
      title: 'Seção 1',
      data: [
        { id: 1, name: 'Item 1'},
        { id: 2, name: 'Item 2'},
      ],
    },
    {
      title: 'Seção 2',
      data: [
        { id: 3, name: 'Item 3'},
        { id: 4, name: 'Item 4'},
      ],
    },
  ];

  return(
    <ScrollView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>Olá, Mundo!</Text>
        <Image
          source={{uri: 'https//reactnative.dev/img/react_native_logo.png'}}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Digite algo"
          value={text}
          onChangeText={setText}
        />
        <Button title="Clique aqui" onPress={handlePress} />
        <TouchableOpacity style={styles.touchableOpacity} onPress={handlePress}>
          <Text style={styles.touchableOpacityText}>Toque aqui</Text>
        </TouchableOpacity>
        <ActivityIndicator animating={isLoading} />
      </View>

      <FlatList
        data={data}
        renderItem={({item}) => <text>{item.name}</text>}
        keyExtractor={(item) => item.id.toString()}
      />

      <SectionList
      sections={sections}
      renderItem={({item}) => <Text>{item.name}</Text>}
      renderSectionHeader={({section: {title} }) => <Text style={styles.sectionHeader}>{title}</Text>}
      keyExtractor={(item) => item.id.toString}
      />
    </ScrollView>
  )

}