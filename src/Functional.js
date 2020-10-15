import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, Button, Alert} from 'react-native';

const App = (props) => {
  const [orderCount, setOrderCount] = useState(0);


useEffect(() => {
  Alert.alert("Welcome", "Clarusway")
}, [])

useEffect(() => {
  if(orderCount > 10)
  Alert.alert("Clarusway", "10'dan fazla seçim yapamazsınız")
}, [orderCount])

  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   console.log('use effect');
  // }, []);

  // console.log('render');

  return (
    <SafeAreaView>
      <View>
        <Text style={{fontSize: 80}}>Count: {orderCount}</Text>
        <Button title="Select Order"
        onPress={() => setOrderCount(orderCount + 3)}/>
      </View>
    </SafeAreaView>
  );
};

export default App;

{
  /* <Text style={{fontSize: 200}}>{counter}</Text>
        <Button title="Up!" onPress={() => setCounter(counter + 1)} />
        <Button title="Reset" onPress={() => setCounter(0)} /> */
}

{/* <Button title="up!" onPress={() => setCounter(counter + 1)} /> */}