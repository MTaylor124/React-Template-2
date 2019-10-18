import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase'

export default class EmailAndPassword extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false
    }
  }

  onButtonPress(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="email"
          placeholderTextColor='black'
          style={styles.login}
          value={this.state.email}
          onChangeText={(email) => this.setState({email})}
          />
        <TextInput
          placeholder="password"
          placeholderTextColor='black'
          style={styles.login}
          value={this.state.password}
          onChangeText={(password) => this.setState({password})}
          />
        <TouchableOpacity
          onPress={() => {this.onButtonPress(this.state.email, this.state.password)}}
          >
          <Text style={styles.loginbutton}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.error}>
        {this.state.error}
        </Text>

        <TouchableOpacity
          onPress={() => {this.onButtonPress('m12428taylor@gmail.com', 'Sprint546')}}
          >
          <Text style={styles.loginbutton}>auto sign-in</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 28
  },
  login: {
    color: 'black',
    backgroundColor: 'skyblue',
    borderRadius: 30,
    borderColor: 'black',
    borderWidth: 2,
    paddingHorizontal: 80,
    maxWidth: '60%',
    marginTop: 8
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginbutton: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50,
    fontWeight: '600',
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderColor: 'rgba(255,255,255,0.3)',
    borderRadius: 50,
    borderWidth: 6,
    paddingLeft: 25,
    margin: 30
  }
});
