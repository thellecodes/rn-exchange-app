import {Box} from 'native-base';
import {Text} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {HEIGHT, WIDTH, normalize} from '../../utils/Constants';

interface ContentProps {
  key: number;
  data: any;
  translateX: Animated.SharedValue<number>;
}

function Content({key: index, data, translateX}: ContentProps) {
  const style = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  });

  return (
    <Animated.View key={index} style={[{width: WIDTH}, style]}>
      <Text
        style={{
          fontSize: normalize(36),
          fontFamily: 'Sk-Modernist-Bold',
          color: 'white',
          marginBottom: 20,
        }}>
        {data.title}
      </Text>
      <Text
        style={{
          fontSize: normalize(14),
          color: '#fff',
          fontFamily: 'Sk-Modernist-Regular',
          paddingRight: 20,
        }}>
        {data.description}
      </Text>
    </Animated.View>
  );
}

export default Content;
