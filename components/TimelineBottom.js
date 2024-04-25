import { View } from 'react-native'

export default function TimelineBottom({ screenHeight, timelineDimensions }) {
  return (
    <View style={{
      content: '',
      width: 1,
      height: .4 * screenHeight,
      backgroundColor: 'white',
      position: 'absolute',
      marginHorizontal: 10,
      left: timelineDimensions.x,
      bottom: .2 * screenHeight,
      zIndex: -1,
    }} />
  );
}