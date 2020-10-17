import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Button from './components/Button';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={myStyles.buttonText}>Hello World</Text>
        <Button />
      </View>
    </SafeAreaView>
  );
};

export default App;

const myStyles = StyleSheet.create({});
