import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase'

export default class EmailAndPassword extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      verifyPassword: '',
      error: '',
      loading: false,
      loggingIn: false,
      signingUp: false
    }
  }

  onSignIn(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch((error) => {
        this.setState({
          error: error.message
        })
      })
  }

  onSignUp(email, password, verify) {
    if (password == verify) {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        this.setState({
          error: error.message,
          error: ''
        })
      })
    } else {
      this.setState({
        password: '',
        verifyPassword: '',
        error: 'Error: passwords do not match'
      })
    }
  }
  onToggleLogin(loggingIn) {
    if (loggingIn) {
      this.setState({ loggingIn: false })
    } else {
      this.setState({ loggingIn: true, signingUp: false })
    }
  }

  onToggleSignUp (signingUp) {
    if (signingUp) {
      this.setState({ signingUp: false })
    } else {
      this.setState({ signingUp: true, loggingIn: false })
    }
  }
  render() {
    let loginStatus
    if (this.state.loggingIn) {
      loginStatus = (
        <View style={styles.centered}>
      <TextInput
        placeholder="email"
        placeholderTextColor='black'
        style={styles.login}
        value={this.state.email}
        onChangeText={(email) => this.setState({email})}
      />
      <TextInput
        placeholder="password"
        secureTextEntry
        placeholderTextColor='black'
        style={styles.login}
        value={this.state.password}
        onChangeText={(password) => this.setState({password})}
      />
      <TouchableOpacity
        onPress={() => {this.onSignIn(this.state.email, this.state.password)}}
      >
        <Text style={styles.loginbutton}>Login</Text>
      </TouchableOpacity>
      </View>
    )
  } else if (this.state.signingUp) {
    loginStatus = (
      <View style={styles.centered}>
    <TextInput
      placeholder="email"
      placeholderTextColor='black'
      style={styles.login}
      value={this.state.email}
      onChangeText={(email) => this.setState({email})}
    />
    <TextInput
      placeholder="password"
      secureTextEntry
      placeholderTextColor='black'
      style={styles.login}
      value={this.state.password}
      onChangeText={(password) => this.setState({password})}
    />
    <TextInput
      placeholder="confirm pass"
      secureTextEntry
      placeholderTextColor='black'
      style={styles.login}
      value={this.state.verifyPassword}
      onChangeText={(verifyPassword) => this.setState({verifyPassword})}
    />
    <TouchableOpacity
      onPress={() => {this.onSignUp(this.state.email, this.state.password, this.state.verifyPassword)}}
    >
      <Text style={styles.loginbutton}>sign up</Text>
    </TouchableOpacity>
    </View>
  )
  }

    return (
      <View>
      <TouchableOpacity
        onPress={() => {this.onSignIn('demo@demo.com', 'demodemo')}}
        >
        <Text style={styles.autobutton}>auto sign-in</Text>
      </TouchableOpacity>
        <View style={styles.signUpAndIn}>
          <TouchableOpacity
            onPress={() => {this.onToggleLogin(this.state.loggingIn)}}
          >
            <Text style={styles.loginbutton}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {this.onToggleSignUp(this.state.signingUp)}}
          >
            <Text style={styles.loginbutton}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        {loginStatus}
        <Text style={styles.error}>
        {this.state.error}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  centered: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  signUpAndIn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  error: {
    color: 'red',
    fontSize: 28
  },
  login: {
    textAlign: 'center',
    color: 'black',
    backgroundColor: 'rgba(255,255,255,0.35)',
    borderRadius: 30,
    borderColor: 'rgba(255,255,255,0.5)',
    borderWidth: 2,
    paddingHorizontal: 30,
    marginTop: 8,
    fontSize: 20,
    width: 300
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginbutton: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: '600',
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderColor: 'rgba(255,255,255,0.3)',
    borderRadius: 50,
    borderWidth: 6,
    paddingHorizontal: 10,
    margin: 20,
    textAlign: 'center'
  },
  autobutton: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: '600',
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderColor: 'rgba(255,255,255,0.3)',
    borderRadius: 50,
    borderWidth: 6,
    paddingHorizontal: 10,
    textAlign: 'center'
  }
});
