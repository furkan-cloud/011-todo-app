import React, {useState} from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native';

const App = (props) => {
  const [counter, setCounter] = useState(0);

  return (
    <SafeAreaView>
      <View>
        <Text style={{fontSize: 200}}>{counter}</Text>
        <Button title="Up!" onPress={() => setCounter(counter + 1)} />
        <Button title="Reset" onPress={() => setCounter(0)} />
      </View>
    </SafeAreaView>
  );
};

export default App;
