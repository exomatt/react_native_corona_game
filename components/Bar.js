import React, {PureComponent} from 'react';
import {StyleSheet, View, Animated, Easing, Image, Text} from 'react-native';
import SpriteSheet from 'rn-sprite-sheet';
class Bar extends PureComponent {
  constructor(props) {
    super(props);
    renderers[this.props.id] = this;
  }

  play = () => {};
  onSelect = () => {
    lifes=3;
    pkt=0;
  };

  render() {
    if (this.props.lifes === 0) {
      console.log('Przekierowuje');
      console.log(this.props);
      this.props.navigation.navigate('Result', {
        result: 3,
        updateData: this.onSelect,
      });
    }
    let lis = [];
    let i;
    for (i = 0; i < this.props.lifes; i++) {
      lis.push(
        <Image
          key={i}
          style={{
            height: 40,
            width: 40,
            top: 0,
            left: 0,
            resizeMode: 'stretch',
          }}
          source={require('../images/heart.png')}
        />,
      );
    }
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
            fontSize: 26,
            color: 'orange',
          }}>
          Lives:
          {lis}
        </Text>
      </View>
    );
  }
}
export default Bar;
