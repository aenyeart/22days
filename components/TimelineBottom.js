import { View } from 'react-native'
import { useSelector } from 'react-redux';
import { screen } from "../styles/styles.js";

/* This component fills out the gap created when the timeline is over-scrolled */
export default function TimelineBottom() {
  const timelinePosition = useSelector(state => state.timelineLayout.x);
  console.log('timelinePosition inside BOTTOM', timelinePosition);
  return (
    <View style={{
      content: '',
      width: 1,
      height: .4 * screen.height,
      backgroundColor: 'white',
      position: 'absolute',
      left: timelinePosition,
      bottom: .23 * screen.height,
      zIndex: -1,
    }} />
  );
}