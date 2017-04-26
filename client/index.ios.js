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
  TouchableHighlight,
  StatusBar
} from 'react-native';
import ShippingInfo from './components/ShippingInfo';
import PaymentInfo from './components/PaymentInfo';
import ReviewAndPay from './components/ReviewAndPay';

export default class client extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      dataFetched: false
    };
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
    this.fetchUserData();
  }

  render() {
    if (this.state.dataFetched) {
      let { name, address, city, state, zip, payment_options } = this.state.user;

      return (
        <View style={styles.flexContainer}>
          <StatusBar translucent={true} backgroundColor={'transparent'} /> 
          <View style={styles.infoContainer}>
            <ShippingInfo 
              name={name}
              address={address}
              city={city}
              state={state}
              zip={zip} 
            />
          </View>
          <View style={styles.infoContainer}>
            <PaymentInfo 
              paymentOptions={payment_options}
            />
          </View>
          <View style={styles.totalContainer}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.text}>$28.98 <Text style={styles.link}>></Text></Text>
          </View>
          <View style={styles.reviewAndPayContainer}>
            <ReviewAndPay />
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.loading}>
          <Text style={styles.loadingText}>App Initializing...</Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  loading: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 40
  },
  flexContainer: {
    display: 'flex'
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'center',
    height: '25%',
  },
  totalContainer: {
    backgroundColor: '#F7F9FA',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    height: '10%'
  },
  reviewAndPayContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '40%',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  link: {
    color: '#1072B7',
    fontSize: 24
  }
});

AppRegistry.registerComponent('client', () => client);
