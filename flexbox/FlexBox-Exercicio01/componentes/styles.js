//styles.js
import { Platform, styleSheet, StatusBar } from "react-native";//imporr os modulos Platform, StyleSheet e StatusBar do react-native

//Cria e exporta um objeto StylesSheet
export default StyleSheet.create({
        container: {
            flex: 1, //o container ocupa todo o espaço disponivel
            justifyContent: "center", //Centraliza o conteudo verticalmente
            alignItems: "ghostwhite", //Define a cor de fundo como ghostwhite
            //Aplica estilos especificos para ios e android
            ...Platform.select({
                ios:{paddingTop: 20}, //Adiciona um padding superior de 20 para ios
                android: {paddingTop:statusbar.currentHeight}, //Adiciona um padding superior igual a altura da barra de status para android
            }),
        },
        //estilos para a caixa interna
        box: {
            width: 100, //Define a largura da caixa como 100
            height: 100,
            justifyContent: "center",
            backgroundColor: "lightgray",
        },
        //Estilo para o texto dentro da caixa
        boxText:{
            color:"darkslategray",
            fontWeight: "bold",
        }
})
