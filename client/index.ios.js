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
      let { flexContainer, infoContainer, totalContainer, text, link, reviewAndPayContainer } = styles;

      return (
        <View style={flexContainer}>
          <StatusBar translucent={true} backgroundColor={'transparent'} /> 
          <View style={infoContainer}>
            <ShippingInfo 
              name={name}
              address={address}
              city={city}
              state={state}
              zip={zip} 
            />
          </View>
          <View style={infoContainer}>
            <PaymentInfo 
              paymentOptions={payment_options}
            />
          </View>
          <View style={totalContainer}>
            <Text style={text}>Total</Text>
            <Text style={text}>$28.98 <Text style={link}>></Text></Text>
          </View>
          <View style={reviewAndPayContainer}>
            <ReviewAndPay />
          </View>
        </View>
      );
    } else {
      let { loading, loadingText } = styles;
      return (
        <View style={loading}>
          <Text style={loadingText}>App Initializing...</Text>
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  infoContainer: {
    height: '25%',
    marginTop: 5
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
