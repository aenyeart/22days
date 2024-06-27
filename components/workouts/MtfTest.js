import { Text } from "../Text.js";
import Input from '../NumberInput.js';
import { useState } from "react";
import WorkoutStep from '../WorkoutStep.js';
import styles from "../../styles/styles.js";
import WorkoutTemplate from "../WorkoutTemplate";

export default ({ mtf, style, today }) => {
  const [newMtf, setNewMtf] = useState(mtf);

  return (
      <WorkoutTemplate
        title='Finish & View Report'
        action={{ type: 'SAVE_RESULTS', value: newMtf }}
        today={today}
      >
        <WorkoutStep>
          <Text style={styles.workoutStyles.text}>FINAL Test – Maximum consecutive pull-ups until failure (no breaks):</Text>
          <Input
            initialValue={mtf}
            handleChange={setNewMtf}
          />
        </WorkoutStep>
    </WorkoutTemplate>
  );
}
