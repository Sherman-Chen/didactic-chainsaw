/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class client extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      dataFetched: false
    }
  }

  fetchUserData() {
    fetch('http://localhost:8080/api')
      .then(res => {
        return res.json();
      })
      .then(r => {
        this.setState({
          user: r[0],
          dataFetched: true
        });
      })
      .catch(e => {
        console.error(e);
      })
  }

  componentDidMount() {
    console.log('logging from client2');
    this.fetchUserData();
  }

  render() {
    if (this.state.dataFetched) {
      return (
        <View>
          <View>
            <Text>Ship to</Text>
            <Text>{this.state.user.name}</Text>
          </View>
          <View>
            <Text>Pay with</Text>
          </View>
          <View>
            <Text>Total</Text>
          </View>
          <Text>View PayPal Policies and your payment method rights.</Text>
          <Text>Pay Now</Text>
          <Text>If money is added to your PayPal balance before this transaction completes, the additional balance may be used to complete your payment. Learn More.</Text>
        </View>
      );
    } else {
      return (
        <Text>App Initializing...</Text>
      )
    }
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('client', () => client);
