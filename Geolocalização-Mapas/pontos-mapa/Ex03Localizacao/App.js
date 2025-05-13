//Impota a biblioteca React, necessária para criar coponentes no React Native
import React from "react";

//Importa os componentes View (estrutura visual) e StatusBar (barra de status superior do sistema)
import { View, StatusBar } from "react-native";

//Importa o componente MapView (para exibir o mapa) e marker (para adicionar marcadores no mapa)
import MapView, { Marker } from "react-native-maps";

//Importa os estilos definidos no arquivo "styles.js" para uso no layout
import styles from "./styles";

//comnetario informado que, antes de usar este código, é necessário instalar o pacote de mapas com Expo
//Comando:npx expo install react-native-maps

//Define a barra de status com icones escuros sobre fundo claro
StatusBar.setBarStyle("dark-content");

//Declara e exporta o componente funcional principal chamado App
export default function App(){
  //Retorna a interface visual do aplicativo
  <View style={styles.container}>

    {/*Componente de mapa, exibindo ocupando a tela de acordo com o esilo definido*/}
    <MapView
    style={styles.MapView}                //Define o estilo visual do mapa
    showsPointsOfInterest={false}         //Oculta pontos de interesse (como lojas, restaurantes, etc...)
    showsUserLocation                     //Exibe um ponto indicando a localização atual do usuario 
    followUserLocation                    //Faz o mapa seguir automaticamente o movimento do usuario
    >

      {/*Primeiro marcador no mapa, representando a "duff brewery"*/}
      <Marker
        title="Duff Brewery"
        description="Uma grande cervejaria artesanal!"
        coordenate={{
          latitude: 43.8418728,
          longitude: -79.086082,
        }}
      />

      {/*Primeiro marcador no mapa, representando a "duff brewery"*/}
      <Marker
        title="Pawtucket Brewery"
        description="A cervejaria historica!"
        coordenate={{
          latitude: 43.8401328,
          longitude: -79.085407,
        }}
      />

    </MapView>
  </View>
}