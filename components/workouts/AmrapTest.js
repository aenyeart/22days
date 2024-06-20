import Input from '../NumberInput.js';
import { useState } from "react";
import { Text } from '../Text.js';
import WorkoutStep from '../WorkoutStep.js';
import styles from "../../styles/styles.js";
import WorkoutTemplate from "../WorkoutTemplate";

export default ({ tdt, latestAmrap, today }) => {
  const [newAmrap, setNewAmrap] = useState(latestAmrap);
  return (
    <>
      <WorkoutTemplate
        action={{ type: "SET_FINAL_AMRAP", value: newAmrap }}
        today={today}
      >
        <WorkoutStep>
          <Text style={styles.workoutStyles.text}>Test – Do pull-ups for AMRAP(i) within a 5-min period:
            {`\n`}– Breaks are allowed, but the timer must not stop.
            {`\n`}– Try to beat {tdt} reps, your total pull-ups from Day 1.
          </Text>

          <Input
            initialValue={newAmrap}
            handleChange={setNewAmrap}
          />
        </WorkoutStep>
      </WorkoutTemplate>
      {/* BUG: timelineLayout.x gets different values (e.g. sometimes 27, or 48) when navigating to this specific workout. Perhaps a race condition needing a setTimeout? */}

    </>
  );
}
