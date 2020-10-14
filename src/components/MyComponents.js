import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Text>Selamlar</Text>
      <Text>Clarusway App'e hoşgeldiniz!</Text>
      <View>
        <Text>Fullstack Developer olmaya hazır olun</Text>
      </View>
    </View>
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    margin: 5,
    padding: 10,
    borderColor: "#e0e0e0",
    borderRadius: 10,
  },
});

//can't find variable hataları genelde import hatalarıdır
// export yazmayı unutursak; elements type is invalid hatası verir
// text girersek alakasız; component exception verir
//create demezsek mesela object is not a function hatası verir
