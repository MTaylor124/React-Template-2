import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class EmailAndPassword extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      error: 'login failed'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder="email" style={styles.login}/>
        <TextInput placeholder="password" style={styles.login}/>
        <TouchableOpacity>
          <Text>{this.state.error}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  login: {
    backgroundColor: 'red',
    borderRadius: 30,
    paddingHorizontal: 80,
    maxWidth: '60%'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
