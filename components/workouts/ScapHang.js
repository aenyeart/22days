import { useState } from 'react';
import Input from '../NumberInput.js';
import CompleteButton from '../CompleteButton.js';
import { Text } from "../Text.js";
import { View, ScrollView } from 'react-native';
import { Divider } from "@rneui/themed";

import TimelineNode from "../TimelineNode";
import Timeline from "../Timeline";
import CountdownTimer from "../CountdownTimer";
import styles from "../../styles/styles.js";

export default ({ mtf, scapHang, style, today }) => {
  const [workoutHeight, setWorkoutHeight] = useState(0);
  const getHeightForTimeline = (event) => {
    let { height } = event.nativeEvent.layout;
    height += 20;
    console.log('height check', height);
    setWorkoutHeight(height);
  }
  const [newScapHang, setNewScapHang] = useState(scapHang);
  const workoutStyles = styles.workoutStyles;

  return (
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

        <View>
          <TimelineNode />
          <Timeline />
          <Text style={workoutStyles.text}>
            {/* <Text style={{ marginBottom: 20 }}> */}

            Scap-Pull Hang for time
            {scapHang === null
              ? " until failure (seconds):"
              : ` for at least ${parseInt(scapHang) + 5} seconds (prev time +5 sec) OR until failure:`
            }
          </Text>
          <Input
            placeholder="Enter scap-pull hang duration (seconds)"
            initialValue={newScapHang}
            handleChange={setNewScapHang}
          />
        </View>

        <View>
          <TimelineNode />
          <Text style={workoutStyles.text}>
            2 min rest
          </Text>
          <CountdownTimer seconds={120} timerText={"2 minute rest finished.\nTime to start the next exercise!"} />
        </View>

        <View>
          <TimelineNode />
          <Text style={workoutStyles.text}>
            Pull-ups x {Math.floor(1.6 * mtf)} (1.6x MTF)
          </Text>
        </View>

      </ScrollView>
      <CompleteButton action=
        {{ type: 'SET_LATEST_SCAP_HANG', value: newScapHang }}
      />
    </>
  );
}
