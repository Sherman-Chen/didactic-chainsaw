import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

const PaymentInfo = props => {
  let { paymentOptions } = props;
  let { container, title, backupText } = styles;

  return (
    <View style={container}>
      <View>
        <Text style={title}>Pay with</Text>
      </View>
      <View>
        <View>
          <Text>{paymentOptions[0].company} x-{paymentOptions[0].account_number}</Text>
          <Text style={backupText}>{paymentOptions[1].company} x-{paymentOptions[1].account_number} (backup)</Text>
        </View>
        <View>
          <Text>></Text>
        </View>
      </View>
    </View>
  )  
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold'
  },
  backupText: {
    color: '#7A8084'
  }
});

export default PaymentInfo