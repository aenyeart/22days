import { View } from 'react-native'
import React from 'react'
import TimelineNode from './TimelineNode'

export default function WorkoutStep({ children }) {
  const styles = {
    width: '98%',
    paddingBottom: 10,
    flexGrow: 1
  };

  return (
    <View style={styles}>
      <TimelineNode />
      {children}
    </View>
  );
}
