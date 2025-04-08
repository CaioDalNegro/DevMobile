import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Hook para navegar entre telas

export default function TelaEstoque() {
  const navigation = useNavigation(); // Acessa o sistema de navegação

  // Estado que guarda a lista de peças no estoque
  const [estoque, setEstoque] = useState([
    { id: '1', nome: 'Parafuso', quantidade: 100 },
    { id: '2', nome: 'Porca', quantidade: 75 },
    { id: '3', nome: 'Arruela', quantidade: 50 },
  ]);

  // Função chamada ao pressionar "Editar" em uma peça
  const editarQuantidade = (item) => {
    navigation.navigate('TelaEdicao', {
      peca: item, // Envia a peça selecionada para a TelaEdicao
      atualizarQuantidade: (novaQuantidade) => {
        // Atualiza a quantidade no estado de estoque
        const novoEstoque = estoque.map((p) =>
          p.id === item.id ? { ...p, quantidade: novaQuantidade } : p
        );
        setEstoque(novoEstoque);
      },
    });
  };

  // Adiciona uma nova peça ao estoque
  const adicionarPeca = () => {
    const novaPeca = {
      id: (estoque.length + 1).toString(),
      nome: `Peça ${estoque.length + 1}`,
      quantidade: 0,
    };
    setEstoque([...estoque, novaPeca]); // Atualiza o array com a nova peça
  };

  // Renderiza cada item da lista
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemNome}>{item.nome}</Text>
      <Text style={styles.itemQtd}>Qtd: {item.quantidade}</Text>
      <TouchableOpacity style={styles.editarBtn} onPress={() => editarQuantidade(item)}>
        <Text style={styles.editarBtnText}>Editar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estoque de Peças</Text>

      {/* Lista as peças com FlatList */}
      <FlatList
        data={estoque}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
      />

      {/* Botão para adicionar nova peça */}
      <TouchableOpacity style={styles.addButton} onPress={adicionarPeca}>
        <Text style={styles.addButtonText}>Adicionar Peça</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilos da tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  lista: {
    paddingBottom: 20,
  },
  itemContainer: {
    backgroundColor: '#444',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemNome: {
    color: 'white',
    fontSize: 18,
    flex: 1,
  },
  itemQtd: {
    color: '#ccc',
    marginRight: 10,
  },
  editarBtn: {
    backgroundColor: '#00bfff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  editarBtnText: {
    color: 'white',
    fontWeight: 'bold',
  },
  addButton: {
    marginTop: 10,
    backgroundColor: '#32CD32',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
