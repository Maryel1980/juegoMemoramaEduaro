import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import Facil from "./screens/Facil";
import Intermedio from "./screens/Intermedio";
import Avanzado from "./screens/Avanzado";
import Como_Jugar from "./screens/Como_jugar";


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Facil" component={Facil} />
        <Stack.Screen name="Intermedio" component={Intermedio} />
        <Stack.Screen name="Avanzado" component={Avanzado} />
        <Stack.Screen name="Como_Jugar" component={Como_Jugar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;