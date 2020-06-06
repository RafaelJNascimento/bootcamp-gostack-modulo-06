import React from 'react';
import { Button, View, Text } from 'react-native';

export default function App({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Página Inicial</Text>
      <Button
        title="Ir para a página de usuário"
        onPress={() => navigation.navigate('User')}
      />
    </View>
  );
}
