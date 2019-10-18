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
        <TextInput
          placeholder="email"
          style={styles.login}
          value={this.state.email}
          onChangeText={(email) => this.setState({ email: email })}
          />
        <TextInput
          placeholder="password"
          style={styles.login}
          value={this.state.password}
          onChangeText={(password) => this.setState({ password: password })}
          />
        <TouchableOpacity>
          <Text style={styles.error}>
            {this.state.error}
          </Text>
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
    backgroundColor: 'skyblue',
    borderRadius: 30,
    borderColor: 'black',
    borderWidth: 2,
    paddingHorizontal: 80,
    maxWidth: '60%',
    marginTop: 5
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
