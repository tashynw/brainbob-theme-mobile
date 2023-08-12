/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {Box, NativeBaseProvider, ScrollView} from 'native-base';
import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Home from './pages/Home';

function App(): JSX.Element {
  return (
    <NativeBaseProvider>
      <SafeAreaView
        style={{
          backgroundColor: Colors.lighter,
        }}>
        <StatusBar barStyle={'light-content'} />
      </SafeAreaView>
      <ScrollView w="100%">
        <Box p={5} bg="white">
          <Home />
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default App;
