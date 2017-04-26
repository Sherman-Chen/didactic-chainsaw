import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import PayNowModal from './PayNowModal';
import MockPickerModal from './MockPickerModal';

export default class PaymentInfo extends Component {
  constructor(props) {
    super(props);
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
    let { paymentOptions } = this.props;
    let { container, title, backupText, itemContainer, item1, item2, link } = styles;

    return (
      <View style={container}>
        <View>
          <Text style={title}>Pay with</Text>
        </View>
        <TouchableHighlight onPress={this.onModalPress} underlayColor='white'>
          <View style={itemContainer}>
            <View style={item1}>
              <Text>{paymentOptions[0].company} x-{paymentOptions[0].account_number}</Text>
              <Text style={backupText}>{paymentOptions[1].company} x-{paymentOptions[1].account_number} (backup)</Text>
            </View>
            <View style={item2}>
              <Text style={link}>></Text>
            </View>
          </View>
        </TouchableHighlight>

        {/* <PayNowModal showModal={this.state.showModal} onClose={this.onModalPress} /> */}
        <MockPickerModal showModal={this.state.showModal} onClose={this.onModalPress} />
      </View>
    )  
  }
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingLeft: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  item1: {
    flexBasis: '90%'
  },
  item2: {
    alignSelf: 'center',
    flexBasis: '10%'
  },
  backupText: {
    color: '#7A8084'
  },
  link: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1072B7',
    textAlign: 'right',
    paddingRight: 9
  }
});