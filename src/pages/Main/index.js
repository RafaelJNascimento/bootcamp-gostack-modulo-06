import React from 'react';
import { Button, Text } from 'react-native';

import { Container } from './styles';

export default function App({ navigation }) {
  return (
    <Container>
      <Text>Página Inicial</Text>
      <Button
        title="Ir para a página de usuário"
        onPress={() => navigation.navigate('User')}
      />
    </Container>
  );
}
