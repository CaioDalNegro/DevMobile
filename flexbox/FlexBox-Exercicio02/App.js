import React from "react";
import { View } from "react-native";
import styles from "./styles";
import Box from "./Box";

//componentes principal App
export default function App() {
  return(
    //View principal que serve como container, aplicando os estilos definidos em styles.container
    <view style={styles.container}>
      <Box>#1</Box>
      <Box>#2</Box>
    </view>
  );
}