import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import useHomeScreen from '../../hooks/useHomeScreen';

const styles = StyleSheet.create({
  HomeScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInput: {
    width: '100%',
    borderWidth: 1,
  },
});

function HomeScreen() {
  const { text, onChangeText } = useHomeScreen();

  return (
    <View style={styles.HomeScreen}>
      <Text>{text}</Text>
      <TextInput style={styles.TextInput} onChangeText={onChangeText} />
    </View>
  );
}

export default HomeScreen;
