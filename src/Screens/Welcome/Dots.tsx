import React from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import Dot from './Dot';
import {WIDTH} from '../../utils/Constants';
import {clamp} from 'react-native-redash';
import {Box} from 'native-base';

interface DotsProps {
  data: number[];
  translateX: Animated.SharedValue<number>;
}

function Dots({data, translateX}: DotsProps) {
  const MAX_INDEX = data.length - 1;

  return (
    <Box flexDirection="row" mt={5}>
      {data.map((_, index) => {
        const dotStyle = useAnimatedStyle(() => {
          const currentIndex = Math.round(-translateX.value / WIDTH);
          const clampedIndex = clamp(currentIndex, 0, MAX_INDEX);
          const mIndex = data[clampedIndex];
          const cIndex = data[index];

          //   const dotWidth = interpolate(
          //     translateX.value,
          //     isMovingRight ? [-WIDTH, 0] : [0, WIDTH], // input range
          //     isMovingRight ? [10, 30] : [30, 10], // output range
          //     'clamp', // extrapolation
          //   );

          return {
            width:
              mIndex === cIndex
                ? withSpring(40, {damping: 105, stiffness: 200})
                : 6,
          };
        });

        return <Dot {...{dotStyle}} />;
      })}
    </Box>
  );
}

export default Dots;
