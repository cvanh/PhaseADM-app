import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/homescreen/index.js';
import DetailsScreen from './src/screens/detailsscreen/index.js';
import CreateTransaction from './src/screens/CreateTransaction/index.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="CreateTransaction" component={CreateTransaction} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
