import React, {PureComponent} from 'react';
import {StyleSheet, View, Animated, Easing, Image, Text} from 'react-native';
import SpriteSheet from 'rn-sprite-sheet';

class Bar extends PureComponent {
  constructor(props) {
    super(props);
  }

  play = () => {

  };

  render() {
    return (
      <View
        style={{
          overflow: 'hidden',
          width: 412,
          height: 684,
          position: 'absolute',
          left: 0,
          top: 0,
        }}>
        <Text
          style={{
            marginLeft: 20,
          }}>
          Lives:
        </Text>
      </View>
    );
  }
}
export default Bar;
