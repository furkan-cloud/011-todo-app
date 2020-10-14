import React from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <SafeAreaView>
        <View>
          <Text style={{fontSize: 200}}>{this.state.counter}</Text>
          <Button title="Up!" onPress={() => this.setState({
              counter: this.state.counter + 1
          })} />
          <Button title="Reset" onPress={() => this.setState({
              counter: 0
          })} />
        </View>
      </SafeAreaView>
    );
  }
}

export default App;
