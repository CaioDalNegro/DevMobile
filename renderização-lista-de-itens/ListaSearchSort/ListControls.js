// Componente que agrupa os controles de filtro e ordenação
import React from "react";
import { View } from "react-native";
import styles from "./styles";
import ListFilter from "./ListFilter";
import ListSort from "./ListSort";

export default function ListControls({ onFilter, onSort, asc }) {
  return (
    // View com estilo aplicado, agrupando os botões horizontalmente
    <View style={styles.controls}>
      {/* Campo de entrada de texto para o filtro */}
      <ListFilter onFilter={onFilter} />
      {/* Botão de alternância de ordenação */}
      <ListSort onSort={onSort} asc={asc} />
    </View>
  );
}
