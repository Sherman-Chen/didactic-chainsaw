import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class Success extends Component {
  constructor(props) {
    super(props);
    this.returnHome = this.returnHome.bind(this);
  }

  returnHome() {
    this.props.navigator.push({
      id: 'Home'
    })
  }

  render() {
    let { container, text, button, buttonText } = styles;
    
    return (
      <View style={container}>
        <Text style={text}>Payment Accepted!</Text>
        <TouchableHighlight
          onPress={this.returnHome}
          underlayColor='#0070BA'
          style={button}
        >
          <Text style={buttonText}>Back to Start</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 24
  },
  button: {
    marginTop: 10,
    width: 220,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1072B7',
    borderRadius: 5
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white'
  }
});
