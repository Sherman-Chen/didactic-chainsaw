import React, { Component } from 'React';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const ShippingInfo = ({name, address, city, state, zip}) => (
  <View>
    <Text>{name}</Text>
  </View>
)

export default ShippingInfo