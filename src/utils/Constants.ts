import {Dimensions, Platform, PixelRatio, StatusBar} from 'react-native';
const {width, height} = Dimensions.get('window');

export const WIDTH = width;
export const HEIGHT = height;

// based on iphone 5s's scale
const scale = width / 320;

export function normalize(size: number) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export const isIOS = Platform.OS === 'ios';
export const statusBarHeight = isIOS ? 20 : StatusBar.currentHeight;
