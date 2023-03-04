import React from 'react';
import { Text, TextInput, View, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import styles from "../styles/styles.js";


function Counter({ lastCompletedDay, latestMaxPullUps, dispatch }) {
  return (
    <View>
      <Button title="Increment" onPress={() => dispatch({ type: 'INCREMENT' })} />
      <Button title="Decrement" onPress={() => dispatch({ type: 'DECREMENT' })} />
    </View>
  );
}

// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     color: 'green'
//   },
// });

function mapStateToProps(state) {
  return {
    lastCompletedDay: state.lastCompletedDay,
    currentFieldValue: state.currentFieldValue,
    latestMaxPullUps: state.latestMaxPullUps,
  };
}

export default connect(mapStateToProps)(Counter);
