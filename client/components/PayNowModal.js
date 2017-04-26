import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Modal } from 'react-native';

const PayNowModal = props => {
  let { showModal, onClose, onAccept } = props;
  let { modalContainer, button, buttonText } = styles;

  return (
    <Modal
      visible={showModal}
      animationType={'fade'}
      transparent={true}
      onRequestClose={() => {console.log('ANDROID DEV')}}
    >
      <View style={modalContainer}>
        <View>
          <TouchableHighlight 
            onPress={onAccept} 
            style={button} 
            underlayColor='#0070BA'
          >
            <Text style={buttonText}>Confirm</Text>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight 
            onPress={onClose} 
            style={button} 
            underlayColor='#0070BA'
          >
            <Text style={buttonText}>Return</Text>
          </TouchableHighlight>
        </View>
       </View> 
    </Modal>
  )
};

const styles = StyleSheet.create({
  modalContainer: {
    padding: 30,
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  },
  button: {
    backgroundColor: '#1072B7',
    height: 60,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  }
});

export default PayNowModal
