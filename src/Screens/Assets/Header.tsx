import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {HEIGHT, WIDTH, normalize, statusBarHeight} from '../../utils/Constants';
import DepositIcon from '../../icons/Deposit';
import ProfileIcon from '../../icons/Profile';
import Bell from '../../icons/Bell';

function Header() {
  return (
    <View
      style={{
        height: HEIGHT * 0.08,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 15,
      }}>
      <View style={styles.iconContainer}>
        <ProfileIcon />
      </View>
      <View style={styles.iconContainer}>
        <Bell />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    borderRadius: 16,
    backgroundColor: '#362E27',
    height: 48,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
