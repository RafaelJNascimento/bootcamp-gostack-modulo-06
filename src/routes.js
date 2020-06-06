import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: '#7159c1',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleStyle: {},
        }}
      >
        <Stack.Screen
          name="Home"
          component={Main}
          options={{
            title: 'Página Inicial',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTitleStyle: {
              textAlign: 'center',
              flex: 1,
            },
          }}
        />
        <Stack.Screen
          name="User"
          component={User}
          options={{ title: 'Usuários' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
