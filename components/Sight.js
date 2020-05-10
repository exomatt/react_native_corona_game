import React, {PureComponent} from 'react';
import {StyleSheet, View, Animated, Easing, Image} from 'react-native';
import SpriteSheet from 'rn-sprite-sheet';

class Sight extends PureComponent {
  constructor(props) {
    super(props);

    renderers[this.props.id] = this;
    this.animatedValue = new Animated.Value(0);

    this.play();
  }

  play = () => {
    // this.animatedValue.setValue(0);

    // // var animation = Animated.timing(this.animatedValue, {
    // //   toValue: 1,
    // //   duration: 8000,
    // //   easing: Easing.linear,
    // //   useNativeDriver: true, // <-- Add this
    // // });

    // Animated.loop(animation).start(); //zapetlenie
  };

  render() {
    const x = this.props.position[0];
    const y = this.props.position[1];

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
          source={require('../images/celownik.png')}
        />
      </Animated.View>
    );
  }
}
export default Sight;
