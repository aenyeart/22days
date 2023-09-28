import { Text } from '../Text.js';
import Input from '../NumberInput.js';
import CompleteButton from '../CompleteButton.js';
import { useState } from "react";
import { View } from 'react-native';
import TimelineNode from '../TimelineNode.js';
import Timeline from '../Timeline.js';
import styles from "../../styles/styles.js";

export default ({ mtf, latestAmrap, today }) => {
  const [newMtf, setNewMtf] = useState(mtf);
  const [newAmrap, setNewAmrap] = useState(latestAmrap);
  const workoutStyles = styles.workoutStyles;

  return (
    <>
      {/* GREEN */}
      <View style={workoutStyles.inner}>
        {/* PINK */}
        <View>
          <TimelineNode />
          <Timeline />
          <Text style={workoutStyles.text}>
            Maximum consecutive pull-ups until failure (no breaks):
          </Text>
          <Input
            initialValue={mtf}
            handleChange={setNewMtf}
          />
        </View>
        <View>
          <TimelineNode />
          <Text style={workoutStyles.text}>
            2-min rest
          </Text>
        </View>

        <View>
          <TimelineNode />
          <Text style={workoutStyles.text}>
            Do pull-ups for AMRAP(i) within a 5-min period:
            {`\n`}– Breaks are allowed, but the timer must not stop.
          </Text>
          <Input
            initialValue={latestAmrap}
            handleChange={setNewAmrap}
          />
        </View>
      </View>

      <CompleteButton action={today === 1
        ? { type: 'SET_INITIAL_STATS', value: { newMtf, newAmrap } }
        : { type: 'COMPLETE_TEST', value: { newMtf, newAmrap } }
      } />
    </>
  );
}
