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
  let { } = styles;

  return (
    <Modal
      visible={showModal}
      animationType={'fade'}
      transparent={true}
      onRequestClose={() => {console.log('ANDROID DEV')}}
    >
      <Picker>
        
      </Picker>
    </Modal>
  )
};

const styles = StyleSheet.create({

});

export default MockPickerModal