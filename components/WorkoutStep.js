import { View } from 'react-native'
import React from 'react'
import TimelineNode from './TimelineNode'

const WorkoutStep = (content) => {
  return (
    <View style={{ width: '98%' }}>
      <TimelineNode />
      {content}
    </View>
  )
}

export default WorkoutStep