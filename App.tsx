import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Menu, Flashcards, SlideShow } from './src/pages';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Flashcards" component={Flashcards} />
        <Stack.Screen name="Slideshow" component={SlideShow} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
