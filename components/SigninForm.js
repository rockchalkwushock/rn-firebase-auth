/* eslint-disable no-console */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements';
import firebase from 'firebase';
import axios from 'axios';

class SigninForm extends Component {
  state = { code: '', phone: '' };
  _handleSubmit = async () => {
    // Can refactor with Redux by placing this in an actionCreator.
    const { code, phone } = this.state;
    try {
      // deconstruct response object.
      const { data: { token } } = await axios.post('/verifyOTP', {
        code,
        phone,
      });
      // provide firebase with GCF generated JWT.
      firebase.auth().signInWithCustomToken(token);
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput
            onChangeText={phone => this.setState({ phone })}
            value={this.state.phone}
          />
        </View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Code</FormLabel>
          <FormInput
            onChangeText={code => this.setState({ code })}
            value={this.state.code}
          />
        </View>
        <Button onPress={this._handleSubmit} title="Submit" />
      </View>
    );
  }
}

export default SigninForm;
