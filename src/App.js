import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const App = (props) => {
  const [counter, setCounter] = useState(0);

  return (
    <SafeAreaView style={style.container}>
      <View style={style.todoView}>
        <Text style={style.todo}>TODO</Text>
        <Text style={style.todoCounter}>{counter}</Text>
      </View>
      <View style={style.addContainer}>
        <TextInput style={style.inputContainer}></TextInput>
        <TouchableOpacity style={style.addButton}>
          <Text style={style.textButton}>ADD TODO</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: '#37474f',
    flex: 1,
    justifyContent: 'space-between',
  },

  todoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'red',
  },
  todo: {fontSize: 40, fontWeight: 'bold', color: '#ffa726'},
  todoCounter: {fontSize: 25, fontWeight: 'bold', color: '#ffa726'},
  addContainer: {
    backgroundColor: '#b0bec5',
    alignItems: 'stretch',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom: 30,
    borderRadius: 20,
  },
  inputContainer: {backgroundColor: 'white', margin: 20, borderRadius: 10},
  addButton: {
    marginHorizontal: 120,
    backgroundColor: '#7e8d94',
    borderRadius: 10,
    marginBottom: 10
  },
  textButton: {
    textAlign: 'center',
    fontWeight: 'bold',
    paddingVertical: 10,
    color: 'white',
  },
});
