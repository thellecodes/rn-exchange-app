import React from 'react';
import Candle, {Candle as CandleModel} from './Candle';
import {Svg} from 'react-native-svg';
import {scaleLinear} from 'd3-scale';
import {View} from 'react-native';

interface ChartProps {
  candles: CandleModel[];
  caliber: number;
  size: number;
  domain: [number, number];
  HEIGHT: number;
}

function Chart({candles, caliber, size, domain, HEIGHT}: ChartProps) {
  const width = size / candles.length;

  const scaleY = scaleLinear()
    .domain(domain)
    .range([HEIGHT - HEIGHT * 0.35, 40]);
  const scaleBody = scaleLinear()
    .domain([0, Math.max(...domain) - Math.min(...domain)])
    .range([0, size]);

  return (
    <Svg width={size} height={HEIGHT - HEIGHT * 0.2}>
      {candles.map((candle, index) => (
        <Candle
          key={candle.date}
          {...{candle, index, width, scaleY, scaleBody}}
        />
      ))}
    </Svg>
  );
}

export default Chart;
