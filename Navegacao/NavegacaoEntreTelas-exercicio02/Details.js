import React from "react";
import { View, Text, StatusBar } from "react-native";
import styles from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Definição da estrutura de parâmetros de navegação
type RootStackParamList = {
    Home: undefined;
    Details: { title: string }; // A tela Details recebe um parâmetro "title"
};

// Define o tipo das props para o componente Details
type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export default function Details({ route }: Props) { 
    // Extrai o parâmetro 'title' passado para a tela Details.
    const { title } = route.params;

    return ( 
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text>{title}</Text>
        </View>
    );
}