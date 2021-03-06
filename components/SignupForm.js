/* eslint-disable no-console */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements';
import axios from 'axios';

class SignupForm extends Component {
  // ES2017 state declaration on classes.
  state = { phone: '' };
  // ES2017 method declaration on classes.
  // no need for bind(this)
  _handleSubmit = async () => {
    // Can refactor with Redux by placing this in an actionCreator.
    try {
      await axios.post('/createUser', { phone: this.state.phone });
      await axios.post('/requestOTP', { phone: this.state.phone });
    } catch (e) {
      // Can handle error better:
      // this.setState({ error: e.message })
      // use this.state.error in component to
      // render the message to the user.
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
        <Button onPress={this._handleSubmit} title="Submit" />
      </View>
    );
  }
}

export default SignupForm;
