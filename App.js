/**
 * Sample CoronaFighter App
 *
 */

import React, {PureComponent} from 'react';
import {Dimensions, AppRegistry, StyleSheet, StatusBar} from 'react-native';
import {GameEngine} from 'react-native-game-engine';
import Background from './components/Background';
import Fighter from './components/Fighter';
import Virus from './components/Virus';
import {MoveFighter, VirusSpawner} from './systems';
import Sight from './components/Sight';
import Bar from './components/Bar';
import Result from './components/Result';
import LetterP from './components/LetterP';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Bullet from './components/Bullet';
import Digit5 from './components/Digit5';
import Minus from './components/Minus';
import Heart from './components/Heart';
import Bomb from './components/Bomb';

global.renderers = [];
global.lifes = 3;
global.pkt = 0;
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BestGameEver"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="BestGameEver" component={BestGameEver} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

class BestGameEver extends PureComponent {
  constructor() {
    super();
  }

  onSelect = () => {
     global.lifes = 3;
  };

  render() {
    let width = Math.round(Dimensions.get('window').width);
    let height = Math.round(Dimensions.get('window').height);
    // Tutaj statycznie dodajemy wszystkie byty do sceny (entities),
    //   type - typy bytów b-background, f-fighter, v-virus
    //   position - pozycja komponetyu na ekranie
    //   renderer - klasa komponentu odpowiedzialnego za rendering bytu
    // UWAGA! Wszystkie atrybuty obiektu bytu są kopiowane do proposów koponentu renderer.
    // Ogólna idea silnika jest taka, żeby w kontrolerach zmieniać wartości atrybutów zgodnie z regułami gry,
    // a komponent renderera w oparciu o te (skopiowane) dane rysował dany komponent.
    // Czyli jest to komunikacja jednokierunkowa entities -> <renderer komponent>.
    // Problem pojawia się, gdy z pewnych względów, potrzebujemy w funkcji kontrolera danych z komponentu renderera,
    // a z poziomu tablicy entities nie mamy dostępu do instancji obiektu renderera.
    // Przykład - animacja "sprzętowa" obiektów realizowana po stronie renderera.
    // Oczywiscie można ją realizować "softwerowo" po stronie kotrolera, zminijać np. w kontrolerze pozycję obiektów.
    // Taki wydaje sie był pierwotny zamysł twórców silnika, jednak funkcje logiki w praktyce są uruchamiane zbyt rzadko,
    // bo zamiast co 16ms, w przypadku emulatora mamy co 100-200ms, więc maksymalnie możemy uzsykać 5-10 FPSów. Nędza!
    // Rozwiązanie zastosowane tutaj opiera się na tablicy globalnej rendererów połączonych z bytami za pomocą id.
    // Jest to niestety mało eleganckie, ale działa!
    // Jesli ktoś ma lepszy pomysł, proszę pisać, mejlować, wszelkie sugestie mile widziane ;)

    return (
      <GameEngine
        style={styles.container}
        systems={[MoveFighter, VirusSpawner]} // funkcje logiki (kontrolery) uruchamiane co 16ms (teoretycznie)
        entities={{
          1: {id: 1, type: 'b', position: [40, 200], renderer: <Background />}, // tlo
          2: {
            id: 2,
            type: 'f',
            position: [width / 2 - 64, height - 200],
            renderer: <Fighter />,
          }, // fajter
          3: {
            id: 3,
            type: 's',
            position: [width / 2 - 40, height - 280],
            renderer: <Sight />,
          }, // celownik
          4: {id: 4, type: 'v', position: [10, 0], renderer: Virus}, // zaraza
          5: {id: 5, type: 'v', position: [20, 0], renderer: Virus},
          6: {id: 6, type: 'v', position: [40, 0], renderer: Virus},
          7: {
            id: 7,
            type: 'l',
            position: [40, 20],
            renderer: <Bar />,
            navigation: this.props.navigation,
          },
          8: {
            id: 8,
            type: 'p',
            position: [width, height],
            renderer: Bullet,
          },
          9: {id: 9, type: 'e', position: [30, 0], renderer: LetterP},
          10: {id: 10, type: '5', position: [10, 0], renderer: Digit5},
          11: {id: 11, type: '-', position: [40, 0], renderer: Minus},
          12: {id: 12, type: 'h', position: [20, 0], renderer: Heart},
          13: {id: 13, type: 'T', position: [20, 0], renderer: Bomb},
        }}>
        <StatusBar hidden={true} />
      </GameEngine>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
