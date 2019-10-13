import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    marginHorizontal: 10,
    flex: 7,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    fontSize: 18,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'green',
    padding: 10,
    marginRight: 10,
  },
  buttonText: {
    color: 'green',
    fontSize: 18,
  },
});

function TodoInput() {
  const [value, setValue] = useState('');
  const onChangeText = (text: string) => {
    setValue(text);
  };
  const onPressAddButton = () => {
    setValue('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
      />
      <TouchableOpacity style={styles.button} onPress={onPressAddButton}>
        <Text style={styles.buttonText}>추가</Text>
      </TouchableOpacity>
    </View>
  );
}

export default TodoInput;
