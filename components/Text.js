import React from 'react';
import ReactNative from 'react-native';

const textStyles = {
  color: "white",
  backgroundColor: "purple"
};

export const Text = ({style, ...props}) => (
  <ReactNative.Text {...props} style={[textStyles, style]} />
);
