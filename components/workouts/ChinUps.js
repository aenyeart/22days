import CompleteButton from '../CompleteButton.js';
import { Text } from "../Text.js";
import { View } from 'react-native';
import TimelineNode from "../TimelineNode";
import Timeline from "../Timeline";
import CountdownTimer from "../CountdownTimer";
import styles from "../../styles/styles.js";

export default ({ mtf, style }) => {
  const workoutStyles = styles.workoutStyles;

  return (
    <>
      {/* GREEN */}
      <View style={workoutStyles.inner}>
        {/* PINK */}


        <View>
          <Timeline />
          <TimelineNode />
          <Text style={workoutStyles.text}>
            Chin-ups x {Math.floor(2 * mtf)} (2x current MTF)
          </Text>
        </View>

        <View>
          <TimelineNode />
          <Text style={workoutStyles.text}>
            2 min rest
          </Text>
          <CountdownTimer seconds={120} timerText={"2 minute rest finished.\nTime to start the next exercise!"} />
        </View>

        <View>
          <TimelineNode />
          <Text style={workoutStyles.text}>
            Pullups x {Math.floor(1.4 * mtf)} (1.4x MTF)
          </Text>
        </View>

      </View>
      <CompleteButton action={null} />
    </>
  );
}
// TODO change floor to round
