import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

import firebase from 'firebase'


export default class Articles extends Component {
  constructor() {
    super()

    this.state = {
      newPassword: '',
      changingPass: false
    }
  }
  onbuttonPressWarning(newPass) {

  }
  onButtonPressUpdate(newPass) {
    let errormessage
    const user = firebase.auth().currentUser
    user.updatePassword(newPass).then(() => {
      alert('successfully changed password! to: ' + newPass)
    })
    this.setState({ changingPass: false})
  }
  toggleShowPass(changing) {
    if (changing) {
      this.setState({ changingPass: false })
    } else {
      this.setState({ changingPass: true })
    }
  }
  render() {
    if (this.state.changingPass) {
      showChangePassword = (
        <View style={styles.passwordOptions}>
        <TextInput
          secureTextEntry
          textAlign={'center'}
          placeholder="new password"
          placeholderTextColor='black'
          style={styles.newpass}
          value={this.state.newPassword}
          onChangeText={(newPassword) => this.setState({newPassword})}
          />
          <TouchableOpacity
            onPress={() => {this.onButtonPressUpdate(this.state.newPassword)}}
          >
            <Text style={styles.changePassButton}>Submit</Text>
          </TouchableOpacity>
        </View>
      )
    } else {
      showChangePassword = (
        <View>
        </View>
      )
    }
    return (
      <View style={styles.container}>
      <Text style={styles.signedIn}>You are now Signed-In!</Text>

      <View style={styles.middleRow}>

        <View style={styles.flexone}>
        <TouchableOpacity
          onPress={() => {
            this.toggleShowPass(this.state.changingPass)
          }}>
          <Text style={styles.changingPassWord}>Change Password</Text>
        </TouchableOpacity>
          {showChangePassword}
        </View>
        <View style={styles.flex2}>
          <TouchableOpacity
          onPress={() => {
            firebase.auth().signOut()
          }}>
            <Text style={styles.signOut}>sign out</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  passwordOptions: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  changePassButton: {
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.3)',
    fontSize: 22,
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: 'white',
    width: 180
  },
  changingPassWord: {
    textAlign: 'center',
    fontSize: 30,
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.2)',
    color: 'black',
    borderRadius: 50,
    paddingHorizontal: 6,
    paddingVertical: 5,
    marginTop: 30,
    marginBottom: 15
  },
  flexone: {
    flex: 2,
    margin: 5
  },
  flex2: {
    flex: 1,
    margin: 5
  },
  signOut: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.2)',
    color: 'black',
    borderRadius: 50,
    paddingHorizontal: 0,
    paddingVertical: 5,
    marginTop: 30,
    marginBottom: 15
  },
  signedIn: {
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 30,
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.2)',
    color: 'black',
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginTop: 30,
    marginBottom: 15
  },
  newpass: {
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.2)',
    color: 'black',
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 30,
    marginBottom: 15
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
});
