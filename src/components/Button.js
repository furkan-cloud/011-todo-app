import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = () => {
  return (
    <TouchableOpacity style={myStyles.buttonContainer}>
      <Text style={myStyles.buttonText}>Press Me!</Text>
    </TouchableOpacity>
  );
};

export default Button;

const myStyles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#ab47bc',
    padding: 15,
    margin: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
  },
});
