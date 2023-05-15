import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ThirdwebProvider} from '@thirdweb-dev/react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NativeBaseProvider} from 'native-base';

import {Routes} from './src/Routes';
import {Welcome, Assets, Trade, Wallet} from './src/Screens';

const Stack = createNativeStackNavigator<Routes>();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Welcome">
    <Stack.Screen
      name="Wallet"
      component={Wallet}
      options={{
        title: 'Wallet',
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="Welcome"
      component={Welcome}
      options={{
        title: 'Welcome',
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="Assets"
      component={Assets}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="Trade"
      component={Trade}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

function App() {
  return (
    <ThirdwebProvider activeChain={'goerli'}>
      <NativeBaseProvider>
        <GestureHandlerRootView style={{flex: 1}}>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </GestureHandlerRootView>
      </NativeBaseProvider>
    </ThirdwebProvider>
  );
}

export default App;
