import { View } from 'react-native'
import { useSelector } from 'react-redux';
import { screen } from "../styles/styles.js";

/* This component fills out the gap created when the timeline is over-scrolled */
export default function TimelineBottom() {
  const timelineLayout = useSelector(state => state.timelineLayout);
  console.log('timelineLayout inside BOTTOM', timelineLayout.x, timelineLayout.y, timelineLayout.width, timelineLayout.height);
  // console.log('Top? ', screen.height - (timelineLayout.y - timelineLayout.height));
  return (
    <View style={{
      content: '',
      width: 1,
      // height: 100,
      height: .4 * screen.height,
      backgroundColor: 'white',
      position: 'absolute',
      left: timelineLayout.x,
      // top: (timelineLayout.y + timelineLayout.height - 130),
      // top: timelineLayout.y - 130,
      // bottom: 0,
      bottom: .23 * screen.height,
      zIndex: -1,
    }} />
  );
}