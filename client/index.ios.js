import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Navigator
} from 'react-native';
import Home from './components/Home';
import Success from './components/Success';

export default class client extends Component {
  renderScene(route, navigator) {
    switch(route.id) {
      case 'Home':
        return (<Home navigator={navigator} />)
      case 'Success':
        return (<Success navigator={navigator} />)
    }
  }

  render() {
    return (
      <Navigator 
        initialRoute={{id: 'Home'}}
        renderScene={this.renderScene}
        configureScreen={(route, routeStack) => Navigator.SceneConfigs.PushFromRight}
      />
    )
  }
}

AppRegistry.registerComponent('client', () => client);
