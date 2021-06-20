/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {StoreProvider, useStore} from './src/store/Store';

const Content = () => {
  const {myColor} = useStore();

  return (
    <View>
      <Text style={{color: myColor}}>Teste!</Text>
    </View>
  );
};

const App = () => {
  return (
    <StoreProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <Content />
      </SafeAreaView>
    </StoreProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
  },
});

export default App;
