import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

const PaymentInfo = props => {
  let { paymentOptions } = props;
  let { title, backupText } = styles;

  return (
    <View>
      <Text style={title}>Pay with</Text>
      <View>
        <Text>{paymentOptions[0].company} x-{paymentOptions[0].account_number}</Text>
        <Text style={backupText}>{paymentOptions[1].company} x-{paymentOptions[1].account_number} (backup)</Text>
        <TouchableHighlight>
          <Text> > </Text>
        </TouchableHighlight>
      </View>
    </View>
  )  
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold'
  },
  backupText: {
    color: '#7A8084'
  }
});

export default PaymentInfo