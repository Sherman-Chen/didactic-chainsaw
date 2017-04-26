import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Modal,
  ScrollView
} from 'react-native';

const MockModal = props => {
  let { showModal, onClose, animation } = props;
  let { modalContainer, article, closeButton, buttonText, articleText, title } = styles;

  return (
    <Modal
      visible={showModal}
      animationType={animation}
      onRequestClose={() => {console.log('ANDROID DEV')}}
    >
        <View style={modalContainer}>
          <ScrollView style={article}>
            <Text style={title}>Content Header</Text>
            <Text style={articleText}>1. ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime dolores fuga, temporibus officiis odio quas asperiores possimus! Est magni ullam vitae unde soluta facere. Ipsam suscipit nemo ducimus natus obcaecati. ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente natus laudantium dolorem odio. Voluptatibus eum voluptate ab, velit animi nam odit culpa veritatis molestiae nihil quas quia tempora officia, possimus.</Text>
            <Text style={articleText}>2. ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime dolores fuga, temporibus officiis odio quas asperiores possimus! Est magni ullam vitae unde soluta facere. Ipsam suscipit nemo ducimus natus obcaecati. ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente natus laudantium dolorem odio. Voluptatibus eum voluptate ab, velit animi nam odit culpa veritatis molestiae nihil quas quia tempora officia, possimus.</Text>
            <Text style={articleText}>3. ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime dolores fuga, temporibus officiis odio quas asperiores possimus! Est magni ullam vitae unde soluta facere. Ipsam suscipit nemo ducimus natus obcaecati. ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente natus laudantium dolorem odio. Voluptatibus eum voluptate ab, velit animi nam odit culpa veritatis molestiae nihil quas quia tempora officia, possimus.</Text>
            <Text style={articleText}>4. ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime dolores fuga, temporibus officiis odio quas asperiores possimus! Est magni ullam vitae unde soluta facere. Ipsam suscipit nemo ducimus natus obcaecati. ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente natus laudantium dolorem odio. Voluptatibus eum voluptate ab, velit animi nam odit culpa veritatis molestiae nihil quas quia tempora officia, possimus.</Text>
            <Text style={articleText}>5. ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime dolores fuga, temporibus officiis odio quas asperiores possimus! Est magni ullam vitae unde soluta facere. Ipsam suscipit nemo ducimus natus obcaecati. ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente natus laudantium dolorem odio. Voluptatibus eum voluptate ab, velit animi nam odit culpa veritatis molestiae nihil quas quia tempora officia, possimus.</Text>
          </ScrollView>
          <TouchableHighlight 
            onPress={onClose} 
            style={closeButton} 
            underlayColor='#0070BA'
          >
            <Text style={buttonText}>Close</Text>
          </TouchableHighlight>
        </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  modalContainer: {
    padding: 30
  },
  article: {
    height: '90%',
    marginBottom: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  closeButton: {
    height: '10%',
    borderRadius: 5,
    backgroundColor: '#1072B7',
    justifyContent: 'center'
  },
  articleText: {
    fontSize: 15,
    marginBottom: 5
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5
  }
});

export default MockModal