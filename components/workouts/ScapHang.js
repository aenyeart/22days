import { useState } from 'react';
import Input from '../NumberInput.js';
import { Text } from "../Text.js";
import WorkoutStep from '../WorkoutStep.js';
import CountdownTimer from "../CountdownTimer";
import Stopwatch from '../Stopwatch.js';
import styles from "../../styles/styles.js";
import WorkoutTemplate from "../WorkoutTemplate";

export default ({ mtf, scapHang, today }) => {
  const [newScapHang, setNewScapHang] = useState(scapHang);

  return (
    <WorkoutTemplate
      action={{ type: 'SET_LATEST_SCAP_HANG', value: newScapHang }}
      today={today}
    >
      <WorkoutStep>
        <Text style={styles.workoutStyles.text}>
          Scap-Pull Hang
          {scapHang === null
            ? " until failure (seconds):"
            : ` for at least ${parseInt(scapHang) + 5} seconds (prev time +5 sec) OR until failure:`
          }
        </Text>
        {/* When the Stopwatch is stopped, I want its state to populate the number input */}
        <Stopwatch setNewScapHang={setNewScapHang} />
      </WorkoutStep>

      <WorkoutStep>
        <Text style={styles.workoutStyles.text}>
          Adjust new Scap-Pull Hang Duration as needed:
        </Text>

        <Input
          append={<Text style={{ color: 'black' }}>seconds  </Text>}
          placeholder="Enter scap-pull hang duration (seconds)"
          initialValue={newScapHang}
          handleChange={setNewScapHang}
        />
      </WorkoutStep>

      <WorkoutStep>
        <Text style={styles.workoutStyles.text}>
          2 min rest
        </Text>
        <CountdownTimer seconds={120} timerText={"2 minute rest finished.\nTime to start the next exercise!"} />
      </WorkoutStep>

      <WorkoutStep>
        <Text style={styles.workoutStyles.text}>
          Pull-ups x {Math.floor(1.6 * mtf)} (1.6x MTF)
        </Text>
      </WorkoutStep>
    </WorkoutTemplate>
  );
}
