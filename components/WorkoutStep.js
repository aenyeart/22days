import { View } from 'react-native'
import React from 'react'
import TimelineNode from './TimelineNode'

export default function WorkoutStep({ children }) {
  const styles = {
    width: '98%',
    paddingBottom: 30, // TODO: Make this responsive to different screen sizes
    flex: '1 0 auto',
    // flex: 1,
  };

  return (
    <View style={styles}>
      <TimelineNode />
      {children}
      {/* <View style={{
        flex: '1 0 20px'
      }} /> */}
    </View>
  );
}
