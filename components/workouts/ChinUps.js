import { Text } from "../Text.js";
import WorkoutStep from '../WorkoutStep.js';
import CountdownTimer from "../CountdownTimer";

import styles from "../../styles/styles.js";
import WorkoutTemplate from "../WorkoutTemplate";


export default ({ mtf, today }) => {
  return (
    <>
      <WorkoutTemplate action={null} today={today}>
        <WorkoutStep>
          <Text style={styles.workoutStyles.text}>
            Chin-ups x {Math.floor(2 * mtf)} (2x current MTF)
          </Text>
        </WorkoutStep>

        <WorkoutStep>
          <Text style={styles.workoutStyles.text}>
            2 min rest
          </Text>

          <CountdownTimer seconds={120} timerText={"2 minute rest finished.\nTime to start the next exercise!"} />
        </WorkoutStep>

        <WorkoutStep>
          <Text style={styles.workoutStyles.text}>
            Pullups x {Math.floor(1.4 * mtf)} (1.4x MTF)
          </Text>
        </WorkoutStep>
      </WorkoutTemplate>
    </>
  );
}
// TODO change floor to round
