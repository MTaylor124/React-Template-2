import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class NewNote extends Component {
  constructor () {
    super()

    this.state = {

    }
  }
  render () {
    return (
      <View style={styles.container}>
      <Text>NewNote</Text>
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
})
