import { Text } from "../Text.js";
import Input from '../NumberInput.js';
import CompleteButton from '../CompleteButton.js';
import { useState } from "react";
import { View } from 'react-native';
import TimelineNode from '../TimelineNode.js';
import Timeline from '../Timeline.js';
import styles  from "../../styles/styles.js";

export default ({ mtf, style }) => {
  const [newMtf, setNewMtf] = useState(mtf);
  const workoutStyles = styles.workoutStyles;

  return (
    <>
      {/* GREEN */}
      <View style={workoutStyles.inner}>
        {/* PINK */}
        <View >
          <TimelineNode />
          <Timeline />
          <Text style={workoutStyles.text}>FINAL Test – Maximum consecutive pull-ups until failure (no breaks):</Text>
          <Input
            initialValue={mtf}
            handleChange={setNewMtf}
          />
        </View>
      </View>
      <CompleteButton title='Finish & View Report' action={{ type: 'SAVE_RESULTS', value: newMtf }} />
    </>
  );
}
