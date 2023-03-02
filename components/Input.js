import React from 'react';
import { Text, TextInput, View, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

function Counter({ lastCompletedDay, latestMaxPullUps, dispatch }) {
  return (
    <View>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="Enter your max pull-ups"
        returnKeyType='done'
        onSubmitEditing={(event) => {
          dispatch({ type: 'SET_CURRENT_MAX_PULL_UPS', value: event.nativeEvent.text });
          event.target.clear();
        }
        }
      ></TextInput>
      <Text>Latest max pull-ups: {latestMaxPullUps}</Text>
      <Text>lastCompletedDay: {lastCompletedDay}</Text>

      <View>
        <Button title="Increment" onPress={() => dispatch({ type: 'INCREMENT' })} />
        <Button title="Decrement" onPress={() => dispatch({ type: 'DECREMENT' })} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'green'
  },
});

function mapStateToProps(state) {
  return {
    lastCompletedDay: state.lastCompletedDay,
    currentFieldValue: state.currentFieldValue,
    latestMaxPullUps: state.latestMaxPullUps,
  };
}

export default connect(mapStateToProps)(Counter);
