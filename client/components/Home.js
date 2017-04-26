import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ActivityIndicator } from 'react-native';
import ShippingInfo from './ShippingInfo';
import PaymentInfo from './PaymentInfo';
import ReviewAndPay from './ReviewAndPay';
import Total from './Total';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      dataFetched: false,
      networkError: false
    };
  }

  fetchUserData() {
    fetch('http://localhost:8080/api', {
      method: 'GET',
      mode: 'CORS',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
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
        this.setState({
          networkError: true
        });
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
            <Total />
          </View>
          <View style={reviewAndPayContainer}>
            <ReviewAndPay navigator={this.props.navigator} />
          </View>
        </View>
      );
    } else if (this.state.networkError) {
      let { loading, loadingText } = styles;
      return (
        <View style={loading}>
          <Text style={[loadingText, {color: 'red'}]}>500 - Server Error</Text>
        </View>
      )
    } else {
      let { loading, loadingText } = styles;
      return (
        <View style={loading}>
          <View>
            <Text style={loadingText}>App Initializing</Text>
          </View>
          <ActivityIndicator size='large' color='#1072B7'/>
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
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 30
  },
  flexContainer: {
    paddingTop: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  infoContainer: {
    height: '25%',
    marginTop: 3
  },
  totalContainer: {
    backgroundColor: '#F7F9FA',
    height: '10%'
  },
  reviewAndPayContainer: {
    height: '40%',
  }
});
