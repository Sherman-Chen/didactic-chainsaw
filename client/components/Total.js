import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Total = () => {
  let { container, text, link, item1, item2, item3 } = styles;

  return (
    <View style={container}>
      <View style={item1}>
        <Text style={text}>Total</Text>
      </View>
      <View style={item2}>
        <Text style={text}>$28.98</Text>
      </View>
      <View style={item3}>
        <Text style={link}>></Text>
      </View>      
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingLeft: 20,
    paddingRight: 10,
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
    fontWeight: 'bold',
    alignSelf: 'flex-end'
  },
  item1: {
    flexBasis: '60%'
  },
  item2: {
    flexBasis: '30%'
  },
  item3: {
    flexBasis: '10%'
  }
});

export default Total