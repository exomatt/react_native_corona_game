import React, {PureComponent} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Easing,
  Image,
  TouchableOpacity,
} from 'react-native';
import SpriteSheet from 'rn-sprite-sheet';

class Sight extends PureComponent {
  constructor(props) {
    super(props);
    renderers[this.props.id] = this;
  }

  play = () => {
  
  };

  stop = () => {
  };

  render() {
    const x = this.props.position[0];
    const y = this.props.position[1];

    return (
      <View
        style={{
          // overflow: 'hidden',
          width: 80,
          height: 80,
          position: 'absolute',
          left: x,
          top: y,
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
      </View>
    );
  }
}
export default Sight;
