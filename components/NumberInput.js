import React from 'react';
import { Dimensions } from 'react-native';
import InputSpinner from "react-native-input-spinner";

export default ({ ...props }) => {

  const { width } = Dimensions.get('window');

  return (
    <InputSpinner
      background={"#FFFFFF"}
      colorLeft={"#FF9595"}
      colorRight={"#3FE180"}
      fontSize={28}
      style={{
        marginTop: 5,
        padding: 8,
        borderRadius: 40,
        width: .8 * width,
      }}
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
