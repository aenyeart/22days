import {React, useEffect} from 'react';
import {useDispatch} from 'react-redux'
import InputSpinner from "react-native-input-spinner";

export default ({...props}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('useEffect num', props.initialValue);
    dispatch({type: props.actionType, value: props.initialValue});
  }, []);

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
