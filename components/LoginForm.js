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
    </View>
  );
}

const styles = StyleSheet.create({
  buffer: {
    flex: 1
  },
  EmailAndPassword: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  logoContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: 40
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
