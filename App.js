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
      apiKey: "AIzaSyCZ3nmX5s-xM32aQplwbCDNqZeKc9p9kho",
      authDomain: "login-app-cc746.firebaseapp.com",
      databaseURL: "https://login-app-cc746.firebaseio.com",
      projectId: "login-app-cc746",
      storageBucket: "login-app-cc746.appspot.com",
      messagingSenderId: "767541623564",
      appId: "1:767541623564:web:b78ba877d28c031834e729",
      measurementId: "G-VSBDESWR36"
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
