import React from 'react';
import {useDispatch} from 'react-redux'
import InputSpinner from "react-native-input-spinner";

function Input({...props}) {
  const dispatch = useDispatch();

  return (
    <InputSpinner
      min={0}
      step={1}
      value={props.initialValue}
      onChange={(num) => {
        dispatch({type: props.actionType, value: num});
      }}
    />
  );
}

export default Input;
