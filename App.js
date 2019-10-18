import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, ImageBackground } from 'react-native';

import Articles from './components/Articles'
import EmailAndPassword from './components/EmailAndPassword'
import Loading from './components/Loading'
import LoginForm from './components/LoginForm'
import Logo from './components/Logo'
import Teal from './components/tealbg.jpg'
export default class App extends Component {
  constructor() {
    super()

    this.state = {
      loggedIn: false
    }
  }
  renderContent = () => {
    switch (this.state.loggedIn) {
      case false:
        return <ImageBackground style={styles.container} source={Teal}>
                  <LoginForm/>
              </ImageBackground>
      case true:
        return <Articles />

    }
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden/>
        {this.renderContent()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
