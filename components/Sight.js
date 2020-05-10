import React, {PureComponent} from 'react';
import {StyleSheet, View, Animated, Easing, Image} from 'react-native';
import SpriteSheet from 'rn-sprite-sheet';

class Sight extends PureComponent {
  constructor(props) {
    super(props);
    renderers[this.props.id] = this;
    this.isAnimating = false;
  }

  play = (type) => {
    this.isAnimating = true;
    this.mummy.play({
      type,
      fps: 24,
      loop: true,
      resetAfterFinish: true,
      onFinish: () => console.log('hi'),
    });
  };

  stop = () => {
    this.mummy.stop(() => console.log('stopped'));
  };

  render() {
    const x = this.props.position[0];
    const y = this.props.position[1];

    return (
      <View
        style={{
          overflow: 'hidden',
          width: 412,
          height: 684,
          position: 'absolute',
          left: x,
          top: y,
        }}>
        <SpriteSheet
          ref={(ref) => (this.mummy = ref)}
          source={require('../images/celownik.png')}
          columns={1} // zakladamy że obraz kolejne klatki animacji umieszczone są w obrazie na rownomiernej siatce
          rows={1} // o podanych wymiarach liczba wierszy x liczba kolumn, klatki numerowane są od 0 od lewej do prawej, z góry na dół
          height={80} // set either, none, but not both (blokada aspect-ratio)
          // width={200}
          imageStyle={{
            marginTop: -1,
            left: 0,
            top: 0,
          }}
          animations={{
            idle: [0], // numery klatek towrzących animacje, mozna dodawac kolejne sekwencje
            // wystarczy tylko przyszkowac odpowiedni szablon (sheet)
            // np. przy użyciu GIMPa i znalezisk na www.OpenGameArt
          }}
        />
      </View>
    );
  }
}
export default Sight;
