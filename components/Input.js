import React from 'react';
import { Text, TextInput, View, Button, StyleSheet, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import styles from "../styles/styles.js";

function Input({ today, latestMaxPullUps, dispatch, ...props }) {

  return (
    <TextInput
      keyboardType="numeric"
      style={styles.input}
      placeholder={props.placeholder}
      returnKeyType='done'
      onEndEditing={(event) => {
        console.log('DEBUG>>>props.actionType', props.actionType);
        console.log('DEBUG>>>event.nativeEvent.text', event.nativeEvent.text);
        dispatch({ type: props.actionType, value: event.nativeEvent.text });
        // event.target.clear();
      }}
    ></TextInput>
  );
}

function mapStateToProps(state) {
  return {
    today: state.today,
    latestMaxPullUps: state.latestMaxPullUps,
    latestAmrap: state.latestAmrap,
    latestScapHang: state.latestScapHang,
    currentMaxPullUps: state.currentMaxPullUps,
    currentAmrap: state.currentAmrap,
    currentScapHang: state.currentScapHang,
  };
}

export default connect(mapStateToProps)(Input);
