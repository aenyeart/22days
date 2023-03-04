import React from 'react';
import { Text, TextInput, View, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import styles from "../styles/styles.js";

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
    </View>
  );
}

function mapStateToProps(state) {
  return {
    lastCompletedDay: state.lastCompletedDay,
    currentFieldValue: state.currentFieldValue,
    latestMaxPullUps: state.latestMaxPullUps,
  };
}

export default connect(mapStateToProps)(Counter);
