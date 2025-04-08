import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './TelaLogin';
import TelaEstoque from './TelaEstoque';
import TelaEdicao from './TelaEdicao';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TelaEstoque" component={TelaEstoque} options={{ title: 'Estoque' }} />
        <Stack.Screen name="TelaEdicao" component={TelaEdicao} options={{ title: 'Editar Peça' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
