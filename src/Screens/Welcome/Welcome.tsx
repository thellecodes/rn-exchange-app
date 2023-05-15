import {
  Canvas,
  Circle,
  Fill,
  Group,
  ImageSVG,
  useSVG,
} from '@shopify/react-native-skia';
import React, {useState} from 'react';
import {View, StyleSheet, LayoutChangeEvent} from 'react-native';
import {Box} from 'native-base';
import {WIDTH, HEIGHT, normalize} from '../../utils/Constants';
import Animated, {
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import Content from './Content';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import {clamp, snapPoint} from 'react-native-redash';
import Dots from './Dots';
import ArrowRight from '../../icons/ArrowRight';

function Welcome() {
  const BGSVG = useSVG(require('../../../assets/images/Onboarding.svg'));
  const [swiperWrapperWidth, setSwiperWrapperWidth] = useState(0);

  const infoData = [
    {
      title: 'Buy, sell & trade more efficient',
      description:
        'Instantly invest in cryptocurrencies, exchange it and pay online with us',
    },
    {
      title: 'Streamline Your Trading',
      description: 'Trade smarter, not harder.',
    },
    {
      title: 'Get More with Us',
      description: 'Invest in the future of finance with ease.',
    },
  ];

  const translateX = useSharedValue(0);
  const buttonX = useSharedValue(0);

  const snapPoints = infoData.map((_, i) => -i * WIDTH);

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {x: number; velocityX: number}
  >({
    onStart: (_, ctx) => {
      ctx.x = translateX.value;
    },
    onActive: ({translationX}, {x}) => {
      translateX.value = translationX + x;
    },
    onEnd: ({velocityX}) => {
      const dest = snapPoint(translateX.value, velocityX, snapPoints);
      translateX.value = withSpring(dest, {damping: 500, stiffness: 200});
    },
  });

  const onSwiperWrapperLayout = (event: LayoutChangeEvent) => {
    const {width} = event.nativeEvent.layout;
    setSwiperWrapperWidth(width);
  };

  const buttonGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {x: number; velocityX: number}
  >({
    onStart: (_, ctx) => {
      ctx.x = buttonX.value;
    },
    onActive: ({translationX}, {x}) => {
      buttonX.value = translationX + x;
    },
    onEnd: () => {
      const dest = clamp(buttonX.value, 0, swiperWrapperWidth - 50);
      buttonX.value = withSpring(dest, {damping: 15, stiffness: 200});
    },
  });

  const buttonXStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: buttonX.value}],
    };
  });

  const buttonText = useAnimatedStyle(() => {
    const opacity = interpolate(
      buttonX.value,
      [0, swiperWrapperWidth / 2, swiperWrapperWidth],
      [1, 0.3, 0],
    );

    return {
      color: 'white',
      opacity,
    };
  });

  const imageStyle = useAnimatedStyle(() => {
    const scale = withSpring(1, {
      damping: 10,
      stiffness: 100,
    });

    const translateY = withSpring(HEIGHT * 0.15, {
      damping: 10,
      stiffness: 100,
    });

    return {
      transform: [{scale}, {translateY}],
    };
  });

  return (
    <Animated.View style={style.container}>
      <View style={{flex: 1}}>
        <Canvas style={{flex: 1}}>
          <Fill color="#562A27" />
          {BGSVG && (
            <ImageSVG svg={BGSVG} x={0} y={0} width={WIDTH} height={HEIGHT} />
          )}
          <Group color="#A86F6C" style={'stroke'}>
            <Circle r={120} strokeWidth={1.5} cx={40} cy={HEIGHT * 0.25} />
            <Circle r={80} strokeWidth={1.5} cx={20} cy={HEIGHT * 0.25} />
          </Group>

          <Group color="#A86F6C" style={'stroke'}>
            <Circle
              r={120}
              strokeWidth={1.5}
              cx={WIDTH - 50}
              cy={HEIGHT * 0.5}
            />
            <Circle
              r={80}
              strokeWidth={1.5}
              cx={WIDTH - 85}
              cy={HEIGHT * 0.48}
            />
          </Group>

          <Group color="#4E4744" style={'stroke'}>
            <Circle
              r={80}
              strokeWidth={1.5}
              cx={WIDTH / 1.5}
              cy={HEIGHT - 50}
            />
            <Circle
              r={50}
              strokeWidth={1.5}
              cx={WIDTH / 1.36}
              cy={HEIGHT - 60}
            />
          </Group>
        </Canvas>
      </View>
      <View style={[StyleSheet.absoluteFill]}>
        <Animated.Image
          source={require('../../../assets/images/card.png')}
          style={[
            {
              height: HEIGHT * 0.35,
            },
            imageStyle,
          ]}
        />
      </View>
      <View style={[StyleSheet.absoluteFill]}>
        <Box style={StyleSheet.absoluteFill} justifyContent={'flex-end'} px={3}>
          <Box flex={1}></Box>
          <PanGestureHandler onGestureEvent={onGestureEvent}>
            <Animated.View
              style={{
                overflow: 'hidden',
                flexDirection: 'row',
              }}>
              {infoData.map((data, index) => {
                return (
                  <Content
                    key={index}
                    index={index}
                    data={data}
                    translateX={translateX}
                  />
                );
              })}
            </Animated.View>
          </PanGestureHandler>
          <Dots data={snapPoints} translateX={translateX} />
          <View style={{marginTop: 40, marginBottom: 24}}>
            <Box justifyContent={'flex-end'}>
              <View
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 8,
                  marginBottom: 10,
                  borderRadius: 10,
                  height: 72,
                  backgroundColor: 'rgba(255, 255, 255,0.15)',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Box w="full" alignItems={'center'} justifyContent={'center'}>
                  <Animated.Text
                    style={[
                      buttonText,
                      {
                        fontFamily: 'Sk-Modernist-Regular',
                        fontSize: normalize(14),
                      },
                    ]}>
                    Swipe to start
                  </Animated.Text>
                </Box>
                <Box
                  onLayout={onSwiperWrapperLayout}
                  position="absolute"
                  w="100%"
                  justifyContent="space-between"
                  zIndex={1}>
                  <PanGestureHandler onGestureEvent={buttonGestureEvent}>
                    <Animated.View
                      style={[
                        {
                          width: 56,
                          height: 56,
                          backgroundColor: 'white',
                          borderRadius: 16,
                          alignItems: 'center',
                          justifyContent: 'center',
                        },
                        buttonXStyle,
                      ]}>
                      <ArrowRight />
                    </Animated.View>
                  </PanGestureHandler>
                </Box>
              </View>
            </Box>
          </View>
        </Box>
      </View>
    </Animated.View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
});

export default Welcome;
