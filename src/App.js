import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const list = ['ali', 'baba'];

const App = (props) => {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState('');
  // const [, addItem] = useState();
  // const updateCounter = () => setCounter(counter + 1);
  // const addItem = () => {};

  function addItem() {
    list.push(text);
  }

  return (
    <SafeAreaView style={style.container}>
      <View style={style.todoView}>
        <Text style={style.todo}>TODO</Text>
        <Text style={style.todoCounter}>{Apple}</Text>
      </View>
      <ScrollView>
        {list.map((item) => {
          return (
            <View>
              <Text>{item}</Text>
            </View>
          );
        })}
      </ScrollView>
      <View style={style.addContainer}>
        <TextInput
          style={style.inputContainer}
          defaultValue={text}
          onChangeText={(text) => setText(text)}/>
        <TouchableOpacity
          style={style.addButton}
          onPress={() => {addItem();setCounter(counter + 1);}}>
          <Text style={style.textButton}>ADD TODO</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// onPress={() => {
//   function1();
//   function2();
//  }}>   

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
    marginBottom: 10,
  },
  textButton: {
    textAlign: 'center',
    fontWeight: 'bold',
    paddingVertical: 10,
    color: 'white',
  },
});
