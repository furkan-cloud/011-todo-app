import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import InputPanel from './components/inputPanel'
import Button from './components/Button';

function sayHi() {
  alert('Hi');
}

const App = () => {
const [userName, setUserName] = useState("");

  return (
    <SafeAreaView>
      <View>
        <Text style={{fontSize: 50}}>Hello World</Text>
        <Button sayingHi={sayHi} color="red" banner="Press Me!" />
        <Button sayingHi={() => {alert("second button")}} color="blue" banner="Press Me Too!" />
        <Button banner="Press Me without color!" />
        <InputPanel sendText={myValue => (alert(myValue))}/>
      </View>
    </SafeAreaView>
  );
};

export default App;

const myStyles = StyleSheet.create({});
