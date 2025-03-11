import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';
import OlaPerfilFuncao from './componentes/OlaPerfilFuncao';
import OlaPerfilClasse from './componentes/OlaPerfilClasse';

export default function App() {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleEnviar = () => {
    if (nome && endereco && telefone) {
      setEnviado(true);
    } else {
      alert('Preencha todos os campos!');
    }
  };

  return (
    <View style={styles.container}>
      <h1>React Native - Exercício Extra</h1>

      {/* Campos de entrada */}
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
      />
      <TextInput
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
      />

      {/* Botão Enviar */}
      <Button title="Enviar" onPress={handleEnviar} />

      {/* Exibição após envio */}
      {enviado && (
        <>
          <OlaPerfilFuncao nome={nome} endereco={endereco} telefone={telefone} />

          <OlaPerfilClasse nome={nome} endereco={endereco} telefone={telefone} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
