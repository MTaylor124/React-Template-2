import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import firebase from 'firebase'
export default function Articles() {
  return (
    <View style={styles.container}>
      <Text>congrats you buttfucker you logged in</Text>
      <TouchableOpacity
      onPress={() => {
        firebase.auth().signOut()
      }}>
        <Text>sign out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
