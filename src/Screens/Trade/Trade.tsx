import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {HEIGHT} from '../../utils/Constants';
import data from '../../utils/data.json';
import Chart from './Chart';

export const {width: size} = Dimensions.get('window');

const candles = data.slice(0, 27);
const values = candles.map(candle => [candle.low, candle.high]).flat();
const domain = [Math.min(...values), Math.max(...values)];
const caliber = size / candles.length;

console.log(domain);

function Trade() {
  return (
    <View style={style.container}>
      <View style={style.topSection}></View>
      <View style={style.middleSection}>
        <Chart {...{candles, size, caliber, domain, HEIGHT}} />
      </View>
      <View style={style.bottomSection}></View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  topSection: {
    height: HEIGHT * 0.2,
    backgroundColor: 'blue',
  },
  middleSection: {
    flex: 1,
    backgroundColor: '#262114',
  },
  bottomSection: {
    height: 96,
    backgroundColor: '#161514',
  },
});

export default Trade;
