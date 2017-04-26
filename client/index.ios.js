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

export default class client extends Component {
  renderScene(route, navigator) {
    switch(route.id) {
      case 'Home':
        return (<Home navigator={navigator} />)
    }
  }

  render() {
    return (
      <Navigator 
        initialRoute={{id: 'Home'}}
        renderScene={this.renderScene}
        configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
      />
    )
  }
}

AppRegistry.registerComponent('client', () => client);
