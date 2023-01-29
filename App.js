import React from 'react';
import {SafeAreaView, View, StyleSheet, Text, TextInput, FlatList} from 'react-native';
import { Button } from 'react-native';

const App = () => {
  const [number, setNumber] = React.useState(0);
  const [number2, setNumber2] = React.useState(0);
  const [total, setTotal] = React.useState(0);
  const [history, setHistory] = React.useState([]);

  const buttonPressed = () => {
    setTotal(Number(number)+Number(number2));
    const title = (number + " + " + number2 + " = " + (Number(number)+Number(number2)))
    const temp = {id: title, title}
    setHistory([...history, temp])
  }
  const buttonPressed2 = () => {
    setTotal(Number(number)-Number(number2));
    const title = (number + " - " + number2 + " = " + (Number(number)-Number(number2)))
    const temp = {id: title, title}
    setHistory([...history, temp])
  }
  console.log(history)
  return (
    <SafeAreaView style={styles.container}>
      <Text>Result: {total}</Text>
      
      <TextInput
        style={styles.input}
        onChangeText={setNumber}
        value={number}
        placeholder="number1"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setNumber2}
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
      <Text>History</Text>
      <FlatList 
        data={history}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text>{item.title}</Text>
        )}
        />
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