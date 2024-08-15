import Input from '../NumberInput.js';
import { useState } from "react";
import { Text } from '../Text.js';
import CountdownTimer from '../CountdownTimer.js';
import WorkoutStep from '../WorkoutStep.js';
import styles from "../../styles/styles.js";
import WorkoutTemplate from "../WorkoutTemplate";

export default ({ tdt, latestAmrap, today }) => {
  const [newAmrap, setNewAmrap] = useState(latestAmrap);
  return (
    <WorkoutTemplate
      action={{ type: "SET_FINAL_AMRAP", value: newAmrap }}
      today={today}
    >
      <WorkoutStep>
        <Text style={styles.workoutStyles.text}>Test – Do pull-ups for AMRAP(i) within a 5-min period.
          {`\n`}Breaks are allowed, but the timer must not stop.
          {`\n`}
          {`\n`}Try to beat {tdt} reps, your TOTAL pull-ups (MTF + AMRAP) from Day 1!
        </Text>
        <CountdownTimer seconds={300} timerText={'5-minute AMRAP test finished. \nRecord your completed reps.'} />
      </WorkoutStep>

      <WorkoutStep>
        <Text style={styles.workoutStyles.text}>
          How many pull-ups did you complete in 5 minutes?
        </Text>
        <Input
          initialValue={latestAmrap}
          handleChange={setNewAmrap}
        />
      </WorkoutStep>
    </WorkoutTemplate>
  );
}
