import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Articles from './components/Articles'
import EmailAndPassword from './components/EmailAndPassword'
import Loading from './components/Loading'
import LoginForm from './components/LoginForm'
import Logo from './components/Logo'

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
        return <LoginForm/>
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
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
