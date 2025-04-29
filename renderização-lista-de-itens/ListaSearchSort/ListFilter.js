//Importa React
import React from "react";

//Importa View e TextInput para a estrutura do campo de busca
import { View, TextInput } from "react-native";

//Importa os estilos do arquivo externo
import styles from "./styles"

//Componente de filtro: campo de texto para digitação
export default function ListFilter({ onFilter }) {
    return (
        //View que encapsula o campo de entrada
        <View>
            {/*TextInput com o foco automatico, placeholder e estilo aplicado*/}
            <TextInput
                autoFocus//Foco automatico ao carregar
                placeholder="Search"//Texto de ajuda quando o campo
                style={styles.filter}//Estilo visual do campo de texto
                onChangeText={onFilter}//Dispara evento para atualizar o estado de filtro
            />
        </View>
    );
}