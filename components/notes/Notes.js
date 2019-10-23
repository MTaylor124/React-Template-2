import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Notes extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  render () {
      return (
        <View style={styles.container}>
        <Text style={styles.note}>This is a Note</Text>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  note: {
    fontSize: 30
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
