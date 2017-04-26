import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MockModal from './MockModal'

export default class Total extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
    this.onModalPress = this.onModalPress.bind(this);
  }

  onModalPress() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    
    let { container, text, link, item1, item2, item3} = styles;

    return (
      <TouchableOpacity 
        onPress={this.onModalPress}
        style={container}
      >
        <View style={item1}>
          <Text style={text}>Total</Text>
        </View>
        <View style={item2}>
          <Text style={text}>$28.98</Text>
        </View>
        <View style={item3}>
          <Text style={link}>></Text>
        </View>      

      <MockModal showModal={this.state.showModal} onClose={this.onModalPress} animation={'fade'}/>  
      </TouchableOpacity>
    )
  }
}

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
