import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Total = () => {
  let { container, text, link } = styles;

  return (
    <View style={container}>
      <Text style={text}>Total</Text>
      <Text style={text}>$28.98 <Text style={link}>></Text></Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  link: {
    color: '#1072B7',
    fontSize: 24,
  }
});

export default Total