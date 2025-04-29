// Componente principal de renderização de lista
import React from "react";
import { FlatList, Text } from "react-native";
import styles from "./styles";
import ListControls from "./ListControls";

export default function List({ data, onFilter, onSort, asc }) {
  return (
    // FlatList exibe a lista de dados de forma otimizada
    <FlatList
      data={data} // Array de dados a ser exibido
      // Insere os controles de filtro e ordenação acima da lista
      ListHeaderComponent={<ListControls {...{ onFilter, onSort, asc }} />}
      // Define como cada item da lista será renderizado: como um texto estilizado
      renderItem={({ item }) => (
        <Text style={styles.item}>{item.value}</Text>
      )}
    />
  );
}
