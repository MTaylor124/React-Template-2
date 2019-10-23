import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Edit extends Component {
  constructor () {
    super()

    this.state = {

    }
  }
  render () {
    return (
      <View style={styles.container}>
      <Text>Edit Note</Text>
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
