import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

const ReviewAndPay = () => {
  return (
    <View style={styles.container}>
      <Text>View PayPal Policies and your payment method rights.</Text>
      <TouchableHighlight onPress={this.onPayNowPress} style={styles.payNowBtn}>
        <Text style={styles.payNowBtnText}>Pay Now</Text>
      </TouchableHighlight>
      <Text style={styles.footer}>
        If money is added to your PayPal balance before this transaction completes, the additional balance may be used to complete your payment.
        <Text onPress={this.onLearnMorePress}> Learn More</Text>.
      </Text>
    </View>
  )  
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  payNowBtn: {
    backgroundColor: 'blue',
  },
  payNowBtnText: {
    color: 'white'
  },
  footer: {
    color: 'grey',
    fontSize: 14
  },
});

export default ReviewAndPay