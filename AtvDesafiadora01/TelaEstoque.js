import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TelaEstoque() {
  const navigation = useNavigation();

  const [estoque, setEstoque] = useState([
    { id: '1', nome: 'Parafuso', quantidade: 100 },
    { id: '2', nome: 'Porca', quantidade: 75 },
    { id: '3', nome: 'Arruela', quantidade: 50 },
  ]);

  // FUNÇÃO EDITAR---------------------------------------------------->
  const editarQuantidade = (item) => {
    navigation.navigate('TelaEdicao', {
      peca: item, // ENVIA A PEÇA SELECIONADA
      atualizarQuantidade: (novaQuantidade) => {
        // ATUALIZA A QUANTIDADE-------------------->
        const novoEstoque = estoque.map((p) =>
          p.id === item.id ? { ...p, quantidade: novaQuantidade } : p
        );
        setEstoque(novoEstoque);
      },
    });
  };

  // ADICIONA UMA NOVA PEÇA AO ESTOQUE---------------------------------->
  const adicionarPeca = () => {
    const novaPeca = {
      id: (estoque.length + 1).toString(),
      nome: `Peça ${estoque.length + 1}`,
      quantidade: 0,
    };
    setEstoque([...estoque, novaPeca]); // Atualiza o array
  };

  // CARREGA OS ITENS DA LISTA---------------->
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

      {/*------------LISTA DAS PEÇAS------------*/}
      <FlatList
        data={estoque}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
      />

      {/* BOTÃO PARA ADICIONAR UMA NOVA PEÇA */}
      <TouchableOpacity style={styles.addButton} onPress={adicionarPeca}>
        <Text style={styles.addButtonText}>Adicionar Peça</Text>
      </TouchableOpacity>
    </View>
  );
}

// ESTILOS DA TELA ESTOQUE-------------------------------------------------------------->
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
