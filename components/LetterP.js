import React, {PureComponent} from 'react';
import {StyleSheet, View, Animated, Easing, Image} from 'react-native';
import SpriteSheet from 'rn-sprite-sheet';

class LetterP extends PureComponent {
  constructor(props) {
    super(props);

    renderers[this.props.id] = this;
    this.animatedValue = new Animated.Value(0);
    // UWAGA! Nie ma innej mozliwosci na pobranie tej wartości synchronicznie
    this.animatedValue.addListener(({value}) => (this._animatedValue = value));
    this.isMoving = false;
  }

  // uruchamia plynna animację/poruszanie sie koronawirusa z góry ekranu na dół
  play = (delay) => {
    this.animatedValue.setValue(0);
    this.isMoving = true;

    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: delay,
      easing: Easing.linear,
      useNativeDriver: true, // <-- Add this
    }).start((res) => {
      // Logic whenever an iteration finishes...
      //console.log('ended '+res.finished);

      this.isMoving = false;
    });
  };

  render() {
    const x = this.props.position[0];
    const y = this.props.position[1];

    var img;

    if (this.props.hit) img = require('../images/letter_p_used.png');
    else img = require('../images/letter_p.png');

    // Poniżej animowany/przesuwany widok w którym osadzony jest statyczny obraz.
    // W celu zrobienia poruszajacej się animacji wybuchu (czyli animacja w animacji) wystarczy podmienić <Image> na <SpriteSheet>
    // a następnie w kontrolerach (systems.js) odpalać tą animację podobnie jak w metodą play().
    // Można też pozostawic jak jest i w kontrolerze "na piechotkę" decydowac jaka klatka ma się wyświetlać
    // poprzez odpowiedni atrybut, ktory jest kopiowny do this.props.hit (patrz wyżej)

    // Interpretacja parametrow dla animatedValue.interpolate:
    //   jak animatedValue == 0 to translateY == -80
    //   jak animatedValue == 1 to translateY == 684
    //   jak pomiedzy 0 i 1 patrz interpolacja liniowa

    return (
      <Animated.View
        style={{
          overflow: 'hidden',
          width: 80,
          height: 80,
          position: 'absolute',
          transform: [
            {translateX: x},
            {
              translateY: this.animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [-80, 684],
              }),
            },
          ],
        }}>
        <Image
          style={{
            height: 80,
            width: 80,
            top: 0,
            left: 0,
            resizeMode: 'stretch',
          }}
          source={img}
        />
      </Animated.View>
    );
  }
}
export default LetterP;
