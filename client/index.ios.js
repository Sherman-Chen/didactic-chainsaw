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

  componentDidMount() {
    console.log('logging from client2');
    this.fetchAPI();
  }

  fetchAPI() {
    fetch('http://localhost:8080/api')
      .then(res => {
        return res.json();
      })
      .then(r => {
        this.setState({
          user: r[0]
        });
        console.log(`state is now ${this.state.user.name}`);
      })
      .catch(e => {
        console.error(e);
      })
  }

  render() {
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
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('client', () => client);
