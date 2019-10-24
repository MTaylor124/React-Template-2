import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, ImageBackground } from 'react-native';

import firebase from 'firebase'

import SignedInScreen from './components/SignedInScreen'
import EmailAndPassword from './components/EmailAndPassword'
import Loading from './components/Loading'
import LoginForm from './components/LoginForm'
import Logo from './components/Logo'
import Teal from './components/tealbg.jpg'
import Teal2 from './components/tealbg2.jpg'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      loggedIn: null
    }
  }

  componentDidMount() {
    const firebaseConfig = {
      // PUT FIREBASE API KEY HERE
    }
    firebase.initializeApp(firebaseConfig)

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent = () => {
    switch (this.state.loggedIn) {
      case false:
        return <ImageBackground style={styles.container} source={Teal}>
                  <LoginForm/>
              </ImageBackground>
      case true:
        return <ImageBackground style={styles.container} source={Teal2}>
                  <SignedInScreen />
              </ImageBackground>

      default:
        return <Loading />

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
