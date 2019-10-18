import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './Logo'
import EmailAndPassword from './EmailAndPassword'

export default function LoginForm() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.EmailAndPassword}>
        <EmailAndPassword />
      </View>
      <View style={styles.buffer}><Text>made by me</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  buffer: {
    flex: 3
  },
  EmailAndPassword: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
