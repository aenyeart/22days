import React from 'react';
import { Text, TextInput, View, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

function Counter({ count, latestMaxPullUps, dispatch }) {
  return (
    <View>
      <TextInput keyboardType="numeric"
        style={styles.input}
        onChangeText={(fieldValue) => dispatch({ type: 'SET_CURRENT_MAX_PULL_UPS', value: fieldValue })}
        placeholder="Hahaha"
      ></TextInput>
      <Text>Latest max pull-ups: {latestMaxPullUps}</Text>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => dispatch({ type: 'INCREMENT' })} />
      <Button title="Decrement" onPress={() => dispatch({ type: 'DECREMENT' })} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

function mapStateToProps(state) {
  return {
    count: state.count,
    latestMaxPullUps: state.latestMaxPullUps,
  };
}

export default connect(mapStateToProps)(Counter);
