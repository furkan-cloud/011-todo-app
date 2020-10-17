import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity
      style={[
        myStyles.buttonContainer,
        {backgroundColor: props.color === undefined ? '#ab47bc' : props.color},
      ]}
      onPress={props.sayingHi}>
      <Text style={myStyles.buttonText}>{props.banner}</Text>
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
    fontSize: 25,
  },
});
