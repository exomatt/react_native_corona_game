var shoot = false;
var subs = false;
var subscription = null;

const VirusSpawner = (entities, {touches, time}) => {
  // petla logiki jest uruchamiana co 16ms... w teorii, w praktyce sa to pobozne zyczenia
  // i odstep czasowy miedzy kolejnymi wywolaniami tej funckji moze wyniesc nawet 100-200ms szczegolnie w emulatorach
  // co skutkowałoby plynnoscią animacji na poziomie 5-10FPS dlatego zamiast bezposrednio kontrolować pozycję obiektow sceny
  // w petli logiki, lepiej jedynie w niej inicjowac i kontrolować przebieg animacji a sama petla animacji jest realizowana
  // wewnętrznie asynchronicznie ze wsparciem sprzętowym => patrz komponenty Animated w renderers.js

  for (var key in entities) {
    if (entities[key].type == 'v') {
      // wirusy
      let id = entities[key].id;
      entities[7].lifes = lifes;
      entities[7].pkt = pkt;
      if (renderers[id] && renderers[id].isMoving) {
        // porusza sie
        // przyblizona (ostatnia) pozycja y wirusa
        // _animatedValue jest uaktualnane asynchronicznie callbackiem
        //console.log(renderers[id]._animatedValue);

        let x = entities[id].position[0] + 40;
        let y = 684 * renderers[id]._animatedValue + 40;

        if (
          Math.abs(entities[2].position[0] + 64 - x) < 64 &&
          Math.abs(entities[2].position[1] + 64 - y) < 64
        ) {
          entities[id].hit = 1;
          if (entities[id].hited) {
            lifes = lifes - 1;
            entities[7].lifes = lifes;
            entities[id].hited = 0;
          }
        }
        // console.log('poz 1 ' + x + '   ' + y);
        // console.log(
        //   'poz 2 ' + entities[8].position[0] + '   ' + entities[8].position[1],
        // );
        x = entities[id].position[0];
        y = 684 * renderers[id]._animatedValue;
        if (
          Math.abs(entities[8].position[0] - x) < 64 &&
          Math.abs(entities[8].position[1] - 270 - y) < 64
        ) {
          entities[id].hit = 1;
          if (entities[id].hited) {
            pkt = pkt + 1;
            console.log('trafione');
            entities[id].hited = 0;
          }
        }
      }

      if (renderers[id] && !renderers[id].isMoving) {
        // "uspiony" za krawedzią ekranu
        let d = 1000 * Math.random();
        if (d < 10) {
          // czestotliwosc wypuszczania nowych wirusow = 10/1000 = 0.01 (czyli 1 raz na 100 tikow)
          entities[id].position = [(412 - 80) * Math.random(), 0]; // losowa pozycja x
          entities[id].hit = 0;
          entities[id].hited = 1;
          renderers[id].play(4000 + 4000 * Math.random()); // losowy czas animacji (przelotu przez cały ekran) 4-8s
        }
      }
    }
    // pocisk
    if (entities[key].type == 'p') {
      let id = entities[key].id;
      if (renderers[id] && !renderers[id].isMoving) {
        // "uspiony" za krawedzią ekranu

        if (shoot) {
          // czestotliwosc wypuszczania nowych wirusow = 10/1000 = 0.01 (czyli 1 raz na 100 tikow)
          entities[id].position = [
            entities[2].position[0],
            entities[2].position[1] + 100,
          ]; // losowa pozycja x
          renderers[id].play(2000); // losowy czas animacji (przelotu przez cały ekran) 4-8s
          shoot = false;
        }
      }
    }

    // extra points
    if (entities[key].type == 'e') {
      let id = entities[key].id;
      if (renderers[id] && renderers[id].isMoving) {
        // porusza sie
        // przyblizona (ostatnia) pozycja y wirusa
        // _animatedValue jest uaktualnane asynchronicznie callbackiem
        //console.log(renderers[id]._animatedValue);

        let x = entities[id].position[0] + 40;
        let y = 684 * renderers[id]._animatedValue + 40;

        if (
          Math.abs(entities[2].position[0] + 64 - x) < 64 &&
          Math.abs(entities[2].position[1] + 64 - y) < 64
        ) {
          entities[id].hit = 1;
          if (entities[id].hited) {
            pkt = pkt + 10;
            entities[7].pkt = pkt;
            entities[id].hited = 0;
          }
        }
      }

      if (renderers[id] && !renderers[id].isMoving) {
        // "uspiony" za krawedzią ekranu
        let d = 2000 * Math.random();
        if (d < 10) {
          // czestotliwosc wypuszczania nowych punktow = 10/2000 = 0.005 (czyli 1 raz na 200 tikow)
          entities[id].position = [(412 - 80) * Math.random(), 0]; // losowa pozycja x
          entities[id].hit = 0;
          entities[id].hited = 1;
          renderers[id].play(4000 + 4000 * Math.random()); // losowy czas animacji (przelotu przez cały ekran) 4-8s
        }
      }
    } 

    // extra points
    if (entities[key].type == '5') {
      let id = entities[key].id;
      if (renderers[id] && renderers[id].isMoving) {
        // porusza sie
        // przyblizona (ostatnia) pozycja y wirusa
        // _animatedValue jest uaktualnane asynchronicznie callbackiem
        //console.log(renderers[id]._animatedValue);

        let x = entities[id].position[0] + 40;
        let y = 684 * renderers[id]._animatedValue + 40;

        if (
          Math.abs(entities[2].position[0] + 64 - x) < 64 &&
          Math.abs(entities[2].position[1] + 64 - y) < 64
        ) {
          entities[id].hit = 1;
          if (entities[id].hited) {
            pkt = pkt + 5;
            entities[7].pkt = pkt;
            entities[id].hited = 0;
          }
        }
      }

      if (renderers[id] && !renderers[id].isMoving) {
        // "uspiony" za krawedzią ekranu
        let d = 2000 * Math.random();
        if (d < 10) {
          // czestotliwosc wypuszczania nowych punktow = 10/2000 = 0.005 (czyli 1 raz na 200 tikow)
          entities[id].position = [(412 - 80) * Math.random(), 0]; // losowa pozycja x
          entities[id].hit = 0;
          entities[id].hited = 1;
          renderers[id].play(4000 + 4000 * Math.random()); // losowy czas animacji (przelotu przez cały ekran) 4-8s
        }
      }
    }

    // minus points
    if (entities[key].type == '-') {
      let id = entities[key].id;
      if (renderers[id] && renderers[id].isMoving) {
        // porusza sie
        // przyblizona (ostatnia) pozycja y wirusa
        // _animatedValue jest uaktualnane asynchronicznie callbackiem
        //console.log(renderers[id]._animatedValue);

        let x = entities[id].position[0] + 40;
        let y = 684 * renderers[id]._animatedValue + 40;

        if (
          Math.abs(entities[2].position[0] + 64 - x) < 64 &&
          Math.abs(entities[2].position[1] + 64 - y) < 64
        ) {
          entities[id].hit = 1;
          if (entities[id].hited) {
            let random = Math.floor(Math.random() * (10 - 1)) + 1;
            pkt = pkt - random;
            entities[7].pkt = pkt;
            entities[id].hited = 0;
          }
        }
      }

      if (renderers[id] && !renderers[id].isMoving) {
        // "uspiony" za krawedzią ekranu
        let d = 2000 * Math.random();
        if (d < 10) {
          // czestotliwosc wypuszczania nowych punktow = 10/2000 = 0.005 (czyli 1 raz na 200 tikow)
          entities[id].position = [(412 - 80) * Math.random(), 0]; // losowa pozycja x
          entities[id].hit = 0;
          entities[id].hited = 1;
          renderers[id].play(4000 + 4000 * Math.random()); // losowy czas animacji (przelotu przez cały ekran) 4-8s
        }
      }
    }

    // heart
    if (entities[key].type == 'h') {
      let id = entities[key].id;
      if (renderers[id] && renderers[id].isMoving) {
        // porusza sie
        // przyblizona (ostatnia) pozycja y wirusa
        // _animatedValue jest uaktualnane asynchronicznie callbackiem
        //console.log(renderers[id]._animatedValue);

        let x = entities[id].position[0] + 40;
        let y = 684 * renderers[id]._animatedValue + 40;

        if (
          Math.abs(entities[2].position[0] + 64 - x) < 64 &&
          Math.abs(entities[2].position[1] + 64 - y) < 64
        ) {
          entities[id].hit = 1;
          if (entities[id].hited) {
            let random = Math.floor(Math.random() * (10 - 1)) + 1;
            if (lifes < 7) {
              lifes = lifes + 1;
              entities[7].lifes = lifes;
            }
            entities[id].hited = 0;
          }
        }
      }

      if (renderers[id] && !renderers[id].isMoving) {
        // "uspiony" za krawedzią ekranu
        let d = 6000 * Math.random();
        if (d < 10) {
          // czestotliwosc wypuszczania nowych punktow = 10/2000 = 0.005 (czyli 1 raz na 200 tikow)
          entities[id].position = [(412 - 80) * Math.random(), 0]; // losowa pozycja x
          entities[id].hit = 0;
          entities[id].hited = 1;
          renderers[id].play(4000 + 4000 * Math.random()); // losowy czas animacji (przelotu przez cały ekran) 4-8s
        }
      }
    }

    // bomb
    if (entities[key].type == 'T') {
      let id = entities[key].id;
      if (renderers[id] && renderers[id].isMoving) {
        // porusza sie
        // przyblizona (ostatnia) pozycja y wirusa
        // _animatedValue jest uaktualnane asynchronicznie callbackiem
        //console.log(renderers[id]._animatedValue);

        let x = entities[id].position[0] + 40;
        let y = 684 * renderers[id]._animatedValue + 40;

        if (
          Math.abs(entities[2].position[0] + 64 - x) < 64 &&
          Math.abs(entities[2].position[1] + 64 - y) < 64
        ) {
          entities[id].hit = 1;
          if (entities[id].hited) {
            for (var key in entities) {
              if (entities[key].type == 'v') {
                let id = entities[key].id;
                entities[id].hit = 1;
                entities[id].hited = 0;
              }
            }
          }
        }
      }

      if (renderers[id] && !renderers[id].isMoving) {
        // "uspiony" za krawedzią ekranu
        let d = 4000 * Math.random();
        if (d < 10) {
          // czestotliwosc wypuszczania nowych punktow = 10/2000 = 0.005 (czyli 1 raz na 200 tikow)
          entities[id].position = [(412 - 80) * Math.random(), 0]; // losowa pozycja x
          entities[id].hit = 0;
          entities[id].hited = 1;
          renderers[id].play(4000 + 4000 * Math.random()); // losowy czas animacji (przelotu przez cały ekran) 4-8s
        }
      }
    }
  }
  return entities;
};
import {
  accelerometer,
  gyroscope,
  setUpdateIntervalForType,
  SensorTypes,
} from 'react-native-sensors';

const MoveFighter = (entities, {touches}) => {
  if (renderers[2] && !renderers[2].isAnimating) renderers[2].play('idle');

  //-- I'm choosing to update the game state (entities) directly for the sake of brevity and simplicity.
  //-- There's nothing stopping you from treating the game state as immutable and returning a copy..
  //-- Example: return { ...entities, t.id: { UPDATED COMPONENTS }};
  //-- That said, it's probably worth considering performance implications in either case.

  touches
    .filter((t) => t.type === 'move')
    .forEach((t) => {
      let fighter = entities[2];
      let sight = entities[3];

      if (fighter && fighter.position) {
        fighter.position = [
          fighter.position[0] + t.delta.pageX,
          fighter.position[1] + t.delta.pageY,
        ];
      }
      if (sight && sight.position) {
        sight.position = [
          sight.position[0] + t.delta.pageX,
          sight.position[1] + t.delta.pageY,
        ];
      }
    });

  touches
    .filter((t) => t.type === 'press')
    .forEach((t) => {
      let sight = entities[3];
      // console.log(t);
      // console.log(sight.position);
      // console.log(
      //   'jestemmm ' + t['event']['locationX'] + ' ' + t['event']['locationY'],
      // );
      if (
        sight &&
        sight.position[0] > t.event.locationX - 50 &&
        sight.position[0] < t.event.locationX - 30 &&
        sight.position[1] > t.event.locationY - 70 &&
        sight.position[1] < t.event.locationY - 30
      ) {
        console.log('Shoot');
        console.log(entities[8].position);
        console.log(entities[4].position);

        shoot = true;
      }
    });
  if (!subs) {
    setUpdateIntervalForType(SensorTypes.accelerometer, 100);
    subscription = accelerometer.subscribe((values) => {
      let fighter = entities[2];
      let sight = entities[3];
      const {x, z} = values;
      if (x > 0.6) {
        if (fighter.position[0] > 0) {
          fighter.position = [fighter.position[0] - 10, fighter.position[1]];
          sight.position = [sight.position[0] - 10, sight.position[1]];
        }
      }
      if (x < -0.6) {
        if (fighter.position[0] > 0) {
          fighter.position = [fighter.position[0] + 10, fighter.position[1]];
          sight.position = [sight.position[0] + 10, sight.position[1]];
        }
      }
    });
    subs = true;
  }

  return entities;
};

export {MoveFighter, VirusSpawner};
