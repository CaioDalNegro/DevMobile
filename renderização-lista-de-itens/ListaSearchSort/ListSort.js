import React from "react";

import { Text } from "react-native";

//Mapa de simbolos para indicar se a ordenação é ascendente ou descendente
const arrows = new Map([
    [true, "▲"],//Ascendente
    [true, "▼"],//Descendente
]);

//Componente de ordenação - exibe um botão de texto que alterna o tipo de ordenação
export default function ListSort({ onSort, asc}) {
    return (
        <Text onPress={onSort}>arrows.get(asc)</Text>
    );
}