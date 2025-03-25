import React from "react";
import {Text, View } from 'react-native';//importa os componentes Text e View do react-native
import styles from "./componentes/styles.js";//importa os estilos definidos no arquivo styles.js

//componentes funcional App
export default function App() {
  //Retorna a estrutura JSX do componente
  return(
    <view style={styles.container}> {/*View principal que utiliza o estilo 'container'*/}
      <view style={styles.box}>
        <Text style={styles.box}> Isto é uma caixa</Text>{/*Texto dentro da caixa, utilizando o estulo 'boxText' */}
      </view>
    </view>
  );
}