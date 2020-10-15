import React, {useState, useEffect} from 'react';
import {SafeAreaView, TextInput, Text, View, Button, Alert, StyleSheet} from 'react-native';

const App = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{margin: 20, fontSize: 150}}>🤞</Text>
        <View style={styles.input}>
          <TextInput
            onChangeText={(userText) => setEmail(userText)}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.input}>
          <TextInput
            onChangeText={(userPass) => setPassword(userPass)}
            secureTextEntry={true}
          />
        </View>
        <Button title="Giriş Yap" />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  input:{
    backgroundColor:"red",
  }
});
