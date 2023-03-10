import React from 'react';
import { Text, TextInput, View, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import styles from "../styles/styles.js";


function Counter({ lastCompletedDay, latestMaxPullUps, dispatch }) {
  return (
    <View>
      <Button title="Increment" onPress={() => lastCompletedDay < 21 &&dispatch({ type: 'INCREMENT' })} />
      <Button title="Decrement" onPress={() => lastCompletedDay > 0 && dispatch({ type: 'DECREMENT' })} />
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
