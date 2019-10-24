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
  EmailAndPassword: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logoContainer: {
    flex: 1,

    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
