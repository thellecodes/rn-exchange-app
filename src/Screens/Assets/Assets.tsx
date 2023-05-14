import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  Text,
  ScrollView,
  Platform,
  StatusBar,
} from 'react-native';
import {HEIGHT, WIDTH, normalize} from '../../utils/Constants';
import {Canvas, LinearGradient, Rect, vec} from '@shopify/react-native-skia';
import Header from './Header';
import {Button, Icon} from 'native-base';
import DepositIcon from '../../icons/Deposit';
import Animated from 'react-native-reanimated';
import {RectButton, TouchableOpacity} from 'react-native-gesture-handler';

function Assets() {
  const tokens = [
    {
      title: 'Bitcoin',
      ticker: 'BTC',
      price: '23,000',
      percentageChange: '10%',
      icon: 'https://cdn.pixabay.com/photo/2013/12/08/12/12/bitcoin-225079_1280.png',
    },
    {
      title: 'Ethereum',
      ticker: 'ETH',
      price: '1,800',
      percentageChange: '-5%',
      icon: 'https://cdn.pixabay.com/photo/2013/12/08/12/12/bitcoin-225079_1280.png',
    },
    {
      title: 'Litecoin',
      ticker: 'LTC',
      price: '150',
      percentageChange: '2%',
      icon: 'https://cdn.pixabay.com/photo/2013/12/08/12/12/bitcoin-225079_1280.png',
    },
    {
      title: 'Ripple',
      ticker: 'XRP',
      price: '0.5',
      percentageChange: '3%',
      icon: 'https://cdn.pixabay.com/photo/2013/12/08/12/12/bitcoin-225079_1280.png',
    },
    {
      title: 'Bitcoin Cash',
      ticker: 'BCH',
      price: '800',
      percentageChange: '-8%',
      icon: 'https://cdn.pixabay.com/photo/2013/12/08/12/12/bitcoin-225079_1280.png',
    },
    {
      title: 'Cardano',
      ticker: 'ADA',
      price: '1.2',
      percentageChange: '15%',
      icon: 'https://cdn.pixabay.com/photo/2013/12/08/12/12/bitcoin-225079_1280.png',
    },
    {
      title: 'Chainlink',
      ticker: 'LINK',
      price: '25',
      percentageChange: '6%',
      icon: 'https://cdn.pixabay.com/photo/2013/12/08/12/12/bitcoin-225079_1280.png',
    },
    {
      title: 'Dogecoin',
      ticker: 'DOGE',
      price: '0.4',
      percentageChange: '12%',
      icon: 'https://cdn.pixabay.com/photo/2013/12/08/12/12/bitcoin-225079_1280.png',
    },
    {
      title: 'Polkadot',
      ticker: 'DOT',
      price: '40',
      percentageChange: '-2%',
      icon: 'https://cdn.pixabay.com/photo/2013/12/08/12/12/bitcoin-225079_1280.png',
    },
    {
      title: 'Stellar',
      ticker: 'XLM',
      price: '0.3',
      percentageChange: '8%',
      icon: 'https://cdn.pixabay.com/photo/2013/12/08/12/12/bitcoin-225079_1280.png',
    },
  ];

  return (
    <>
      <StatusBar hidden={true} />
      <View style={{flex: 1}}>
        <Canvas style={{flex: 1}}>
          <Rect x={0} y={0} width={WIDTH} height={HEIGHT}>
            <LinearGradient
              start={vec(0, 0)}
              end={vec(0, 0)}
              colors={['#EABB13', '#161514']}
            />
          </Rect>
        </Canvas>
        <View
          style={[
            StyleSheet.absoluteFill,
            {
              paddingHorizontal: 24,
              backgroundColor: '#161514',
              justifyContent: 'flex-end',
            },
          ]}>
          <View style={{flex: 1}}>
            <Header />
            <Text
              style={{
                fontSize: normalize(14),
                fontFamily: 'Sk-Modernist-Regular',
                color: '#fff',
              }}>
              Total balance
            </Text>
            <Text
              style={{
                marginTop: 4,
                fontWeight: '700',
                color: '#fff',
                fontFamily: 'Sk-Modernist-Regular',
                fontSize: normalize(30),
              }}>
              $5,450.500
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 18,
              }}>
              <Button
                _focus={{background: '#fff'}}
                bg="white"
                alignItems={'center'}
                w={163}
                borderRadius={8}
                startIcon={
                  <View
                    style={{
                      transform: [{rotate: '-270deg'}],
                    }}>
                    <DepositIcon />
                  </View>
                }
                marginRight={2}>
                <Text
                  style={{
                    fontSize: normalize(14),
                    fontFamily: 'Sk-Modernist-Regular',
                  }}>
                  Deposit
                </Text>
              </Button>
              <Button
                _focus={{background: '#fff'}}
                bgColor={'#FFFFFF'}
                alignItems={'center'}
                borderRadius={8}
                w={163}
                startIcon={
                  <View
                    style={{
                      transform: [{rotate: '-90deg'}],
                    }}>
                    <DepositIcon />
                  </View>
                }>
                <Text
                  style={{
                    fontSize: normalize(14),
                    fontFamily: 'Sk-Modernist-Regular',
                  }}>
                  Widithraw
                </Text>
              </Button>
            </View>

            <Text
              style={{
                fontSize: normalize(20),
                fontFamily: 'Sk-Modernist-Regular',
                color: '#fff',
                marginVertical: 16,
              }}>
              Favorites
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 30,
              }}>
              {tokens.map(({title, price, percentageChange, icon}, a) => {
                return (
                  <Animated.View
                    style={{
                      width: WIDTH / 2 - 30,
                      height: 191,
                      borderRadius: 16,
                      backgroundColor:
                        'rgba(255, 188, 17, 0.08) @ 0% rgba(255, 255, 255, 0.05) @ 75.52%',
                      padding: 16,
                    }}>
                    <View
                      style={{
                        alignItems: 'center',
                        width: '100%',
                        flexDirection: 'row',
                      }}>
                      <View
                        style={{
                          height: 32,
                          width: 32,
                          borderRadius: 100,
                          marginRight: 8,
                        }}>
                        <Image
                          style={{flex: 1}}
                          source={{uri: icon}}
                          resizeMode="cover"
                        />
                      </View>
                      <View>
                        <Text
                          style={{
                            color: 'white',
                            fontFamily: 'Sk-Modernist-Regular',
                            fontSize: 16,
                            marginBottom: 3,
                          }}>
                          {title}
                        </Text>
                        <Text
                          style={{
                            fontFamily: 'Sk-Modernist-Regular',
                            fontSize: 16,
                            color: 'rgba(255, 255, 255, 0.6)',
                          }}>
                          Bitcoin
                        </Text>
                      </View>
                    </View>

                    <View style={{marginTop: 36}}>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: normalize(20),
                          fontFamily: 'Sk-Modernist-Regular',
                        }}>
                        ${price}
                      </Text>

                      <Text
                        style={{
                          marginTop: 10,
                          fontSize: normalize(16),
                          color: '#E11A38',
                        }}>
                        {percentageChange}
                      </Text>

                      <View
                        style={{
                          marginTop: 8,
                        }}></View>
                    </View>
                  </Animated.View>
                );
              })}
            </View>
          </View>

          <View
            style={{
              height: Platform.OS === 'android' ? HEIGHT * 0.37 : HEIGHT * 0.43,
              backgroundColor: '#161514',
              borderColor: '#000',
            }}>
            <Text
              style={{
                fontSize: normalize(20),
                color: 'white',
                marginTop: 18,
                fontFamily: 'Sk-Modernist-Regular',
                marginBottom: 10,
              }}>
              Popular Cryptocurrency
            </Text>
            <ScrollView
              contentContainerStyle={styles.scrollContainer}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}>
              {tokens.map((item, index) => (
                <CryptoCard
                  key={index}
                  title={item.title}
                  price={item.price}
                  ticker={item.ticker}
                  percentageChange={item.percentageChange}
                  image={item.icon}
                />
              ))}
            </ScrollView>
          </View>
        </View>

        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            {
              paddingHorizontal: 20,
              height: 75,
              alignSelf: 'center',
              transform: [{translateY: HEIGHT - 75}],
              paddingVertical: 5,
            },
          ]}>
          <View
            style={{
              height: '100%',
              width: '100%',
              backgroundColor: 'red',
              borderRadius: 16,
            }}></View>
        </Animated.View>
      </View>
    </>
  );
}

const CryptoCard = ({title, price, percentageChange, image, ticker}: any) => {
  return (
    <>
      <View style={styles.card}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={{uri: image}} style={styles.image} />
          <View style={{marginLeft: 10}}>
            <Text style={styles.title}>{ticker}</Text>
            <Text style={styles.name}>{title}</Text>
          </View>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Text style={styles.price}>{price}</Text>
          <Text
            style={
              percentageChange.includes('-')
                ? styles.negativeChange
                : styles.positiveChange
            }>
            {percentageChange}
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 75,
  },
  card: {
    width: '90%',
    borderRadius: 10,
    shadowColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  price: {
    color: '#FFFFFF',
    fontFamily: 'Sk-Modernist-Regular',
    marginBottom: 3,
  },
  image: {
    width: 32,
    height: 32,
    marginBottom: 10,
    marginRight: 16,
  },
  title: {
    fontFamily: 'Sk-Modernist-Regular',
    fontSize: normalize(16),
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff',
  },
  name: {
    fontFamily: 'Sk-Modernist-Regular',
    color: '#878686',
    fontSize: normalize(14),
    marginBottom: 5,
  },
  positiveChange: {
    color: '#02C173',
    fontSize: 16,
    fontFamily: 'Sk-Modernist-Regular',
  },
  negativeChange: {
    color: '#E11A38',
    fontSize: 16,
  },
});

export default Assets;
