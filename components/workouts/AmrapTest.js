import CompleteButton from '../CompleteButton.js';
import Input from '../NumberInput.js';
import { useState } from "react";
import { Text } from '../Text.js';
import { View, ScrollView } from 'react-native';
import TimelineNode from "../TimelineNode";
import Timeline from "../Timeline";
import { Divider } from "@rneui/themed";
import styles from "../../styles/styles.js";

// export default ({ tdt, latestAmrap, style }) => {
export default ({ tdt, latestAmrap, today }) => {
  const [workoutHeight, setWorkoutHeight] = useState(0);
  const getHeightForTimeline = (event) => {
    let { height } = event.nativeEvent.layout;
    height += 20;
    console.log('height check', height);
    setWorkoutHeight(height);
  }
  const [newAmrap, setNewAmrap] = useState(latestAmrap);
  const workoutStyles = styles.workoutStyles;
  return (
    // BUG: Final Report is triggered by tapping somewhere outside the complete button
    <>
      {/* GREEN */}
      <ScrollView bounces='true' style={workoutStyles.inner}>

        {/* PINK */}
        <Text style={{
          textAlign: 'center',
          alignSelf: 'center',
          fontSize: 24,
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 20,
          width: '80%',
        }}>
          Workout #{today}:
        </Text>
        <Divider style={{ width: "100%", marginBottom: 20 }} />

        <View style={{
          flexDirection: 'row',
        }}
          onLayout={getHeightForTimeline}
        >
          <Timeline style={{ height: this.workoutHeight }} />

          <View style={{}}>

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
        </View>
      </ScrollView>
      <CompleteButton action={{ type: "SET_FINAL_AMRAP", value: newAmrap }} />
    </>
  );
}
