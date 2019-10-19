import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import firebase from 'firebase'
export default class Articles extends Component {
  constructor() {
    super()

    this.state = {
      newPassword: ''
    }
  }
  onbuttonPressWarning(newPass) {

  }
  onButtonPressUpdate(newPass) {
    const user = firebase.auth().currentUser
    user.updatePassword(newPass).then(() => {
      alert('new password changed to', newPass)
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>congrats you buttfucker you logged in</Text>
        <TouchableOpacity
        onPress={() => {
          firebase.auth().signOut()
        }}>
          <Text>sign out</Text>
        </TouchableOpacity>

        <TextInput
          placeholder="new password"
          placeholderTextColor='black'
          style={styles.newpass}
          value={this.state.newPassword}
          onChangeText={(newPassword) => this.setState({newPassword})}
          />
          <TouchableOpacity
            onPress={() => {this.onButtonPressUpdate(this.state.newPassword)}}
          >
            <Text style={styles.loginbutton}>Change Password</Text>
          </TouchableOpacity>
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
});
