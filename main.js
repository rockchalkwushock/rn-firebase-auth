import Expo from 'expo';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { SignupForm, SigninForm } from './components';
import firebaseConfig from './sensitive';
import './utils';

class App extends React.Component {
  componentDidMount() {
    // initialize firebase with credentials.
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    return (
      <View style={styles.container}>
        <SignupForm />
        <SigninForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

Expo.registerRootComponent(App);
