import React, {useState} from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const InputPanel = (props) => {
  const [inputText, setInputText] = useState('');

    const sendValue = () => {
        setInputText("");
        props.sendText(inputText)
    }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
        value={inputText}
        onChangeText={value => setInputText(value)}
        placeholder="Arama..." />
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={sendValue}>
        <Text style={{textAlign: 'center'}}>Seç</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputPanel;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cfd8dc',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  inputContainer: {
    backgroundColor: '#eceff1',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    backgroundColor: '#b2dfdb',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});
