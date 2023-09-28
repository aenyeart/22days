import CompleteButton from '../CompleteButton.js';
import { Text } from "../Text.js";
import { View } from 'react-native';
import TimelineNode from "../TimelineNode";
import Timeline from "../Timeline";
import styles  from "../../styles/styles.js";

export default ({ mtf, style }) => {
  const workoutStyles = styles.workoutStyles;


  return (
    <View style={workoutStyles.outer}>
      {/* GREEN */}
      <View style={workoutStyles.inner}>
        {/* PINK */}
        <View>
          <TimelineNode />
          <Timeline />
          <Text style={workoutStyles.text}>
            Commando Pullups x {Math.floor(2 * mtf)} (2x current MTF)
          </Text>
        </View>

        <View>
          <TimelineNode />
          <Text style={workoutStyles.text}>
            2 min rest
          </Text>
        </View>

        <View>
          <TimelineNode />
          <Text style={workoutStyles.text}>
            Pullups x {Math.floor(1.5 * mtf)} (1.5x MTF)
          </Text>
        </View>
      </View>
      <CompleteButton action={null} />
    </View>

  );
}
