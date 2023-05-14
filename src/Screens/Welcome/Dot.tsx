import React from 'react';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';

interface DotProps {
  dotStyle: any;
}

function Dot({dotStyle}: DotProps) {
  return (
    <Animated.View
      style={[
        {
          height: 6,
          marginRight: 5,
          borderRadius: 5,
          backgroundColor: 'white',
          marginLeft: 10
        },
        dotStyle,
      ]}
    />
  );
}

export default Dot;
