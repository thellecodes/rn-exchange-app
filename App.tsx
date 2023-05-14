import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ThirdwebProvider} from '@thirdweb-dev/react-native';
import {Welcome, Assets, Trade} from './src/Screens';
import {Routes} from './src/Routes';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NativeBaseProvider} from 'native-base';
import SkiaScreen from './src/Screens/Skia';
import {Wallet} from './src/Wallet';

const Stack = createNativeStackNavigator<Routes>();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Welcome">
    <Stack.Screen
      name="Skia"
      component={SkiaScreen}
      options={{
        title: 'Skia',
        headerShown: false,
      }}
    />
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
