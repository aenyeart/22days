import React, { useRef } from 'react'
import { View } from "react-native";
import { useDispatch } from 'react-redux';

export default function Timeline() {
  const timelineRef = useRef();
  const dispatch = useDispatch();
  const handleLayout = (e) => {
    timelineRef.current.measureInWindow((x, y, width, height) => {
      console.log('onLayout', x, y, width, height);
      dispatch({ type: 'SET_TIMELINE_LAYOUT', value: { x: x, y: y, width: width, height: height } });
    });
  }

  return (
    <View
      ref={timelineRef}
      onLayout={handleLayout}
      style={{
        width: 1,
        // height is set in style prop wherever Timeline is used
        backgroundColor: 'white',
        position: 'relative',
        marginHorizontal: 10,
        left: -2,
        top: 6,
      }} />
  );
};
