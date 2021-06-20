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
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
} from 'react-native';
import {initialState, myReducer} from './src/store/MyReducer';
import {StoreProvider, useStore} from './src/store/Store';

const Content = () => {
  const state = useStore();

  return (
    <View>
      <Text style={{color: state.color}}>Teste!</Text>
      <Button
        title="Add Item"
        onPress={() => {
          state.dispatch({
            type: 'ADD_ITEM',
            item: {
              name: 'new item',
              key: state.state.items.length,
            },
          });
        }}
      />
      <FlatList
        data={state.state.items}
        renderItem={({item}) => {
          return (
            <View>
              <Text>Key: {item.key}</Text>
              <Text>Name: {item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const App = () => {
  return (
    <StoreProvider reducer={myReducer} initialState={initialState}>
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
