import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme } from './theme';
import { Home } from './screens/Home';
import { Categories } from './screens/Categories';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar style="light" />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Categories" component={Categories} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}