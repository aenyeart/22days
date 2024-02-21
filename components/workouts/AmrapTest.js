import CompleteButton from '../CompleteButton.js';
import Input from '../NumberInput.js';
import { useState } from "react";
import { Text } from '../Text.js';
import { View, ScrollView } from 'react-native';
import TimelineNode from "../TimelineNode";
import Timeline from "../Timeline";
import { Divider } from "@rneui/themed";
import styles  from "../../styles/styles.js";

// export default ({ tdt, latestAmrap, style }) => {
export default ({ tdt, latestAmrap }) => {
  const [newAmrap, setNewAmrap] = useState(latestAmrap);
  const workoutStyles = styles.workoutStyles;
  return (
    // BUG: Final Report is triggered by tapping somewhere outside the complete button
    <>
      {/* GREEN */}
      <View style={workoutStyles.inner}>
        {/* PINK */}
        <View>
          <TimelineNode />
          <Timeline />
          <Text style={workoutStyles.text}>Test – Do pull-ups for AMRAP(i) within a 5-min period:
            {`\n`}– Breaks are allowed, but the timer must not stop.
            {`\n`}– Try to beat {tdt} reps, your total pull-ups from Day 1.
          </Text>

          <Input
            initialValue={newAmrap}
            handleChange={setNewAmrap}
          />
        </View>
      </View>
      <CompleteButton action={{ type: "SET_FINAL_AMRAP", value: newAmrap }} />
    </>
  );
}
