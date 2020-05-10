import React, {PureComponent} from 'react';
import {StyleSheet, View, Animated, Easing, Image} from 'react-native';
import SpriteSheet from 'rn-sprite-sheet';

 class Background extends PureComponent {
  constructor(props) {
    super(props);

    renderers[this.props.id] = this;
    this.animatedValue = new Animated.Value(0);

    this.play();
  }

  play = () => {
    this.animatedValue.setValue(0);

    var animation = Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 8000,
      easing: Easing.linear,
      useNativeDriver: true, // <-- Add this
    });

    Animated.loop(animation).start(); //zapetlenie
  };

  render() {
    return (
      <View
        style={{
          overflow: 'hidden',
          width: 412,
          height: 684,
          backgroundColor: 'black',
          position: 'absolute',
          left: 0,
          top: 0,
        }}>
        <Animated.Image
          style={{
            width: 412,
            height: 3 * 412,
            transform: [
              {translateX: 0},
              {
                translateY: this.animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-412, 1],
                }),
              },
            ],
          }}
          fadeDuration={0}
          source={require('../images/bkgnd1_2x1.png')}
          resizeMode={'stretch'}
        />
      </View>
    );
  }
}
export default Background;