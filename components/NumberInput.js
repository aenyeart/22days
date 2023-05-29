import React from 'react';
import InputSpinner from "react-native-input-spinner";

export default ({ ...props }) => {
  return (
    <InputSpinner
      min={0}
      step={1}
      value={props.initialValue}
      onChange={(num) => {
        console.log('onChange num', num);
        props.handleChange(num);
      }}
    />
  );
}
