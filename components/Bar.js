import React, {PureComponent} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Easing,
  Image,
  Text,
  Dimensions,
} from 'react-native';

class Bar extends PureComponent {
  constructor(props) {
    super(props);
    renderers[this.props.id] = this;
    this.state = {
      x: 'unknown',
      y: 'unknown',
      z: 'unknown',
      subscription: null,
    };
  }

  play = () => {};
  onSelect = () => {
    lifes = 3;
    pkt = 0;
  };



  // move = () => {
  //   const {x, z} = this.state;
  //   let width = Math.round(Dimensions.get('window').width);
  //   let height = Math.round(Dimensions.get('window').height);
  //   let fighter = renderers[2];
  //   let sight = renderers[3];
  //   // left
  //   console.log(fighter)
  //   if (x > 0.6) {
  //     if (fighter.position[0] > 0) {
  //       fighter.position = [fighter.position[0] - 50, fighter.position[1] - 50];
  //       sight.position = [sight.position[0] - 50, sight.position[1] - 50];
  //     }
  //   }
  //   // // right
  //   // else if (x < -0.6) {
  //   //   let newPosition = position + 1;
  //   //   if (newPosition <= 24) {
  //   //     if (newArray[newPosition] === 'M') {
  //   //       navigation.navigate('Result');
  //   //     } else if (newArray[newPosition] === 1) {
  //   //       newArray[newPosition] = 'E';
  //   //       if (position === 0) {
  //   //         newArray[position] = 'S';
  //   //       } else {
  //   //         newArray[position] = 1;
  //   //       }
  //   //       setPosition(newPosition);
  //   //       setArray(newArray);
  //   //     }
  //   //   }
  //   // }
  //   // // up
  //   // else if (z > 0.6) {
  //   //   let newPosition = position - 4;
  //   //   if (newPosition >= 0) {
  //   //     if (newArray[newPosition] === 1) {
  //   //       newArray[newPosition] = 'E';
  //   //       setPosition(newPosition);
  //   //       setArray(newArray);
  //   //     }
  //   //   }
  //   // }
  //   // // down
  //   // else if (z < -0.6) {
  //   //   let newPosition = position + 4;
  //   //   if (newPosition <= 24) {
  //   //     if (newArray[newPosition] === 1) {
  //   //       newArray[newPosition] = 'E';
  //   //       if (position === 0) {
  //   //         newArray[position] = 'S';
  //   //       } else {
  //   //         newArray[position] = 1;
  //   //       }
  //   //       console.log(newPosition);
  //   //       console.log(newArray);
  //   //       setPosition(newPosition);
  //   //       setArray(newArray);
  //   //     }
  //   //   }
  //   // }
  // };

  render() {
    // const {x, y, z} = this.state;
    // console.log(x, y, z);
    // this.move()
    if (this.props.lifes === 0) {
      // console.log('Przekierowuje');
      // console.log(this.props);
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
        <Text
          style={{
            marginLeft: 20,
            fontSize: 26,
            color: 'orange',
          }}>
          Points: {this.props.pkt}
        </Text>
      </View>
    );
  }
}
export default Bar;
