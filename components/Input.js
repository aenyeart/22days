import React from 'react';
import {Text, TextInput, View, Button, StyleSheet, SafeAreaView} from 'react-native';
import { connect } from 'react-redux';
import styles from "../styles/styles.js";

function Input({ lastCompletedDay, latestMaxPullUps, dispatch, ...props }) {
  return (
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder={props.placeholder}
        returnKeyType='done'
        onSubmitEditing={(event) => {
          dispatch({ type: props.actionType, value: event.nativeEvent.text });
          // event.target.clear();
        }}
      ></TextInput>
  );
}

function mapStateToProps(state) {
  return {
    lastCompletedDay: state.lastCompletedDay,
    latestMaxPullUps: state.latestMaxPullUps,
    latestAmrap: state.latestAmrap,
    latestScapHang: state.latestScapHang,
    currentMaxPullUps: state.currentMaxPullUps,
    currentAmrap: state.currentAmrap,
    currentScapHang: state.currentScapHang,
  };
}

// function mapStateToProps(state) {
//   return {
//     lastCompletedDay: state.lastCompletedDay,
//     currentFieldValue: state.currentFieldValue,
//     latestMaxPullUps: state.latestMaxPullUps,
//   };
// }

export default connect(mapStateToProps)(Input);
