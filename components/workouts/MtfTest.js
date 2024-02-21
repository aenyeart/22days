import { Text } from "../Text.js";
import Input from '../NumberInput.js';
import CompleteButton from '../CompleteButton.js';
import { useState } from "react";
import { View, ScrollView } from 'react-native';
import TimelineNode from '../TimelineNode.js';
import Timeline from '../Timeline.js';
import { Divider } from "@rneui/themed";
import styles from "../../styles/styles.js";

export default ({ mtf, style, today }) => {
  const [workoutHeight, setWorkoutHeight] = useState(0);
  const getHeightForTimeline = (event) => {
    let { height } = event.nativeEvent.layout;
    height += 20;
    console.log('height check', height);
    setWorkoutHeight(height);
  }
  const [newMtf, setNewMtf] = useState(mtf);
  const workoutStyles = styles.workoutStyles;

  return (
    <>
      {/* GREEN */}
      <ScrollView bounces='true' style={workoutStyles.inner}>
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
      </ScrollView>
      <CompleteButton title='Finish & View Report' action={{ type: 'SAVE_RESULTS', value: newMtf }} />
    </>
  );
}
