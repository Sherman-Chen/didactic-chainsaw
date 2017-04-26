import React, { Component } from 'React';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import MockPickerModal from './MockPickerModal';

export default class ShippingInfo extends Component {
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
    let { name, address, city, state, zip } = this.props;
    let { container, title, itemContainer, item1, item2, text, text2, link } = styles;

    return (
      <View style={container}>
        <View>
          <Text style={title}>Ship to</Text>
        </View>
        <TouchableHighlight onPress={this.onModalPress} underlayColor='white'>
          <View style={itemContainer}>
            <View style={item1}>
              <Text style={text}>{name}</Text>
              <Text style={text2}>{address}, {city}, {state} {zip}</Text>
            </View>
            <View style={item2}>
              <Text style={link}>></Text>
            </View>
          </View>
        </TouchableHighlight>

        <MockPickerModal showModal={this.state.showModal} onClose={this.onModalPress} />
    </View>
    )
  }
}

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
    marginTop: 10
  },
  item1: {
    flexBasis: '90%'
  },
  item2: {
    alignSelf: 'center',
    flexBasis: '10%'
  },
  text: {
    fontSize: 20,
  },
  text2: {
    fontSize: 13,
    lineHeight: 30
  },
  link: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1072B7',
    textAlign: 'right',
    paddingRight: 9
  }
});
