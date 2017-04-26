import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const PaymentInfo = props => {
  let { paymentOptions } = props;

  return (
    <View>
      <Text>Pay with</Text>
      <Text>{paymentOptions[0].company} x-{paymentOptions[0].account_number}</Text>
    </View>
  )  
}

export default PaymentInfo