import React from 'react';
import {
  Canvas,
  Circle,
  Group,
  Paint,
  LinearGradient,
  vec,
  Oval,
} from '@shopify/react-native-skia';
import {Text, Box} from 'native-base';
import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

function SkiaScreen() {
  const mX = width / 2;
  const mY = height / 2;

  const size = 200;
  const r = size * 0.33;
  return (
    <Canvas style={{flex: 1}}>
      <Group>
        <LinearGradient
          start={vec(2 * r, 2 * r)}
          end={vec(4 * r, 4 * r)}
          colors={['#0061ff', '#60efff']}
        />
        <Circle cx={3 * r} cy={3 * r} r={r} />
      </Group>
    </Canvas>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SkiaScreen;
