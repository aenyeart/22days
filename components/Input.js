import React from 'react';
import {TextInput} from 'react-native';
import styles from "../styles/styles.js";
import {useDispatch} from 'react-redux'

function Input({...props}) {
  const dispatch = useDispatch();

  return (
    <TextInput
      keyboardType="numeric"
      style={styles.input}
      placeholder={props.placeholder}
      returnKeyType='done'
      onEndEditing={(event) => {
        dispatch({type: props.actionType, value: event.nativeEvent.text});
      }}
    ></TextInput>
  );
}

export default Input;
