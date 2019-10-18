import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Logo() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Fancy Logo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 50,
    fontWeight: '600',
    backgroundColor: 'skyblue',
    color: 'black',
    borderRadius: 50,
    paddingLeft: 20,
    paddingBottom: 5,
    borderWidth: 5,
    borderColor: 'black'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
