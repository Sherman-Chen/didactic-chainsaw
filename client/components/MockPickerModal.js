import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Modal,
  Picker
} from 'react-native';

const MockPickerModal = props => {
  let { showModal, onClose } = props;
  let { modalContainer, buttonContainer, button, buttonText, picker, container } = styles;

  return (
    <View style={modalContainer}>
      <Modal
        visible={showModal}
        animationType={'fade'}
        transparent={false}
        onRequestClose={() => {console.log('ANDROID DEV')}}
      >
        <View style={container}>
          <View style={picker}>
            <Picker 
              selectedValue={'option1'}
            >
              <Picker.Item label='option1' value='option1'/>
              <Picker.Item label='option2' value='option2'/>
              <Picker.Item label='option3' value='option3'/>
            </Picker>
          </View>
          <TouchableHighlight style={buttonContainer} onPress={onClose} underlayColor='#0070BA'>
            <View style={button}>
              <Text style={buttonText}>Save Selection</Text>
            </View>
          </TouchableHighlight> 
        </View>
      </Modal>
    </View>
  )
};

const styles = StyleSheet.create({
  modalContainer: {
    padding: 30,
  },
  picker: {
    height: '50%',
  },
  container: {
    justifyContent: 'center'
  },
  buttonContainer: {
    height: '50%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#1072B7',
    height: 60,
    width: 300,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  }
});

export default MockPickerModal