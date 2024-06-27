import {useState} from 'react';

import CompleteButton from '../CompleteButton.js';
import CountdownTimer from '../CountdownTimer.js';
import Input from '../NumberInput.js';
import styles from '../../styles/styles.js';
import {Text} from '../Text.js';
import TimelineBottom from '../TimelineBottom.js';
import WorkoutStep from '../WorkoutStep.js';
import WorkoutTemplate from "../WorkoutTemplate";

export default ({ mtf, latestAmrap, today }) => {
  const [newMtf, setNewMtf] = useState(mtf);
  const [newAmrap, setNewAmrap] = useState(latestAmrap);
  return (
      <WorkoutTemplate action={today === 1
        ? { type: 'SET_INITIAL_STATS', value: { newMtf, newAmrap } }
        : { type: 'COMPLETE_TEST', value: { newMtf, newAmrap } }
      } today={today}>
            <WorkoutStep>
              <Text style={styles.workoutStyles.text}>
                Maximum consecutive pull-ups until failure (no breaks):
              </Text>
              <Input
                initialValue={mtf}
                handleChange={setNewMtf}
              />
            </WorkoutStep>

            <WorkoutStep>
              <Text style={styles.workoutStyles.text}>
                2-min rest
              </Text>
              <CountdownTimer seconds={120} timerText={'2 minute rest finished.\nTime to start the next exercise!'} />
            </WorkoutStep>

            <WorkoutStep>
              <Text style={styles.workoutStyles.text}>
                Do pull-ups for AMRAP(i) within a 5-min period:
                {`\n`}– Breaks are allowed, but the timer must not stop.
              </Text>
              <Input
                initialValue={latestAmrap}
                handleChange={setNewAmrap}
              />
            </WorkoutStep>
    </WorkoutTemplate>
  );
}
