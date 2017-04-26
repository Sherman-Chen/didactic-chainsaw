import React, { Component } from 'React';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';


const ShippingInfo = props => {
  let { name, address, city, state, zip } = props;
  let { title } = styles;
  return (
    <View>
      <View>
        <Text style={title}>Ship to</Text>
      </View>
      <View>
        <Text>{name}</Text>
        <Text>{address}, {city}, {state} {zip}</Text>
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
  } 
});

export default ShippingInfo