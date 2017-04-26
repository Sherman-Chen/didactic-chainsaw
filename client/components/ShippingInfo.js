import React, { Component } from 'React';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

const ShippingInfo = ({name, address, city, state, zip}) => (
  <View>
    <View>
      <Text>Ship to</Text>
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

export default ShippingInfo