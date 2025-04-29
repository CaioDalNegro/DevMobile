//Importa o React para utilizar componentes e JSX
import React from "react";

//Importa o componente View do React Native para estruturar a interface
import { View } from "react-native";

//Importa os estilos definidos no arquivo externo styles.js
import styles from "./styles";

//Importa o componente ListContainer, que gerencia a lógica da lista
import ListContainer from "./ListContainer";

//Função principal do aplicativo, responsavel por renderizar a interface
export default function App() {
  return(
    //Componente View com o estilo aplicado(estilo container)
    <View>
      {/*Insere o componente que controla e exibe a lista de itens*/}
      <ListContainer />
    </View>
  );
}