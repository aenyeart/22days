import { View } from 'react-native'
import React from 'react'
import TimelineNode from './TimelineNode'

export default ({children}) => {
  return (
    <View style={{ width: '98%', paddingBottom: 10 }}>
      <TimelineNode />
      {children}
    </View>
  );
}
