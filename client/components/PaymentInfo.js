import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

const PaymentInfo = props => {
  let { paymentOptions } = props;
  let { container, title, backupText, alignItems, item1, item2, link } = styles;

  return (
    <View style={container}>
      <View>
        <Text style={title}>Pay with</Text>
      </View>
      <View style={alignItems}>
        <View style={item1}>
          <Text>{paymentOptions[0].company} x-{paymentOptions[0].account_number}</Text>
          <Text style={backupText}>{paymentOptions[1].company} x-{paymentOptions[1].account_number} (backup)</Text>
        </View>
        <View style={item2}>
          <Text style={link}>></Text>
        </View>
      </View>
    </View>
  )  
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingLeft: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20
  },
  alignItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  item1: {
    flexBasis: '90%'
  },
  item2: {
    alignSelf: 'center',
    flexBasis: '10%'
  },
  backupText: {
    color: '#7A8084'
  },
  link: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1072B7',
    textAlign: 'right',
    paddingRight: 9
  }
});

export default PaymentInfo