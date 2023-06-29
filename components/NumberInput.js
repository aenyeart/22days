import React from 'react';
import InputSpinner from "react-native-input-spinner";

export default ({ ...props }) => {
  return (
    <InputSpinner
      background={"#FFFFFF"}
      colorLeft={"#FF9595"}
      colorRight={"#3FE180"}
      fontSize={28}
      style={{padding: 8, borderRadius: 40}}
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
