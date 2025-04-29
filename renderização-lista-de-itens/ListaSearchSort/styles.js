//Importa o módulo StyleSheet da biblioteca React Native
import { StyleSheet } from "react-native";
import ListControls from "./ListControls";

//Cria e exporta um objeto de estilos usando styleSheet.create
export default StyleSheet.create({
    //Estilo aplicado ao container principal
    container: {
        flex: 1,//Ocupa todo o espaço disponivel da tela
        flexDirection: "column",//Organiza os elementos filhos verticalmente
        paddingTop: 40, //Adiciona um espaçamento
    },
    item: {
        margin: 5,//Espaçamento da margin de 5 pixel
        padding: 5,//Espaçamento interno de 5 pixel
        color: "slategrey",//Cor de texto
        backgroundColor: "ghostwhite",//Cor de fundo
        textAlign: "center", //Centraliza o texto horizontalmente
    },
    //Estilo do campo de texto de filtro
    filter: {
        height: 40,//Altura do campo
        width: 200,//Largura do campo
    },

    //Estilo da barra de controles (filtro e ordenação)
    controls: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        backgroundColor: "white",
    },

})