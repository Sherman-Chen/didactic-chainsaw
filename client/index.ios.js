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
  View,
  TouchableHighlight
} from 'react-native';
import ShippingInfo from './components/ShippingInfo';
import PaymentInfo from './components/PaymentInfo';

export default class client extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      dataFetched: false
    };
    this.onPayNowPress = this.onPayNowPress.bind(this);
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

  onPayNowPress() {
    console.log('wired');
  }

  componentDidMount() {
    this.fetchUserData();
  }

  render() {
    if (this.state.dataFetched) {
      let { name, address, city, state, zip, payment_options } = this.state.user;

      return (
        <View>
          <ShippingInfo 
            name={name}
            address={address}
            city={city}
            state={state}
            zip={zip} 
          />
          <PaymentInfo 
            paymentOptions={payment_options}
          />
          <View>
            <Text>Total</Text>
            <Text>$28.98</Text>
          </View>
          <Text>View PayPal Policies and your payment method rights.</Text>
          <TouchableHighlight onPress={this.onPayNowPress}>
            <Text>Pay Now</Text>
          </TouchableHighlight>
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
