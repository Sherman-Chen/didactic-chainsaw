import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import MockModal from './MockModal';
import PayNowModal from './PayNowModal';

export default class ReviewAndPay extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      showPayNowModal: false
    };
    this.onModalPress = this.onModalPress.bind(this);
    this.onPayNowPress = this.onPayNowPress.bind(this);
  }

  onModalPress() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  onPayNowPress() {
    this.setState({
      showPayNowModal: !this.state.showPayNowModal
    });
  }

  render() {
    let { container, blurb, link, payNowBtn, payNowBtnText, footer} = styles;

    return (
      <View style={container}>
        <Text style={blurb}>
          View 
            <Text style={link} onPress={this.onModalPress}> PayPal Policies </Text> 
          and your payment method rights.
        </Text>
        <TouchableHighlight 
          onPress={this.onPayNowPress} 
          style={payNowBtn}
          underlayColor='#0070BA'
        >
          <View>
            <Text style={payNowBtnText}>Pay Now</Text>
          </View>
        </TouchableHighlight>
        <Text style={footer}>
          If money is added to your PayPal balance before this transaction completes, the additional balance may be used to complete your payment.
          <Text onPress={this.onModalPress} style={link}> Learn More</Text>.
        </Text>

        <MockModal showModal={this.state.showModal} onClose={this.onModalPress} />
        <PayNowModal showModal={this.state.showPayNowModal} onClose={this.onPayNowPress}/>
      </View>
    )  
  }
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 20
  },
  blurb: {
    fontSize: 12,
    marginBottom: 20,
    marginTop: 10
  },
  payNowBtn: {
    backgroundColor: '#1072B7',
    height: 60,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  payNowBtnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  footer: {
    color: 'grey',
    lineHeight: 15,
    fontSize: 10
  },
  link: {
    color: '#1072B7',
    fontWeight: 'bold'
  }
});