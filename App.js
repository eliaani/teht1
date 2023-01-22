import React from 'react';
import {SafeAreaView, View, StyleSheet, Text, TextInput} from 'react-native';
import { Button } from 'react-native';

const App = () => {
  const [number, onChangeNumber] = React.useState(0);
  const [number2, onChangeNumber2] = React.useState(0);
  const [total, onChangeTotal] = React.useState(0);

  const buttonPressed = () => {
    onChangeTotal(Number(number)+Number(number2));
  }
  const buttonPressed2 = () => {
    onChangeTotal(Number(number)-Number(number2));
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text>Result: {total}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="number1"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber2}
        value={number2}
        placeholder="number2"
        keyboardType="numeric"
      />
      <View style={styles.buttoncontainer}>
        <View style={styles.button}>
          <Button onPress={buttonPressed} title="+"/>
        </View>
        <View style={styles.button}>
          <Button onPress={buttonPressed2} title="-" />
        </View>
      </View>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttoncontainer: {
    padding: 16,
    gap: 10,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button:{
    marginHorizontal: 10,
    width: 30,
  }
});

export default App;