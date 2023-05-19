import React from 'react';
import {useDispatch} from 'react-redux'
import InputSpinner from "react-native-input-spinner";

export default ({...props}) => {
  const dispatch = useDispatch();

  return (
    <InputSpinner
      min={0}
      step={1}
      value={props.initialValue}
      onChange={(num) => {
        console.log('onChange num', num);
        dispatch({type: props.actionType, value: num});
      }}
    />
  );
}
