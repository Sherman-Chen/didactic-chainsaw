import React, { Component } from 'React';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';


const ShippingInfo = props => {
  let { name, address, city, state, zip } = props;
  let { container, title, alignItems, item1, item2, text, text2, link } = styles;

  return (
    <View style={container}>
      <View>
        <Text style={title}>Ship to</Text>
      </View>
      <View style={alignItems}>
        <View style={item1}>
          <Text style={text}>{name}</Text>
          <Text style={text2}>{address}, {city}, {state} {zip}</Text>
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
    paddingLeft: 10
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
  text: {
    fontSize: 20,
  },
  text2: {
    fontSize: 13,
    lineHeight: 30
  },
  link: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1072B7',
    textAlign: 'right',
    paddingRight: 9
  }
});

export default ShippingInfo