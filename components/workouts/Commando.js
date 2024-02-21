import CompleteButton from '../CompleteButton.js';
import { Text } from "../Text.js";
import { useState } from "react";
import { View, ScrollView } from 'react-native';
import TimelineNode from "../TimelineNode";
import Timeline from "../Timeline";
import CountdownTimer from "../CountdownTimer";
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

        <Timeline />
        <View>
          <TimelineNode />
          <Text style={workoutStyles.text}>
            Commando Pullups x {Math.floor(2 * mtf)} (2x current MTF)
          </Text>
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
            Pullups x {Math.floor(1.5 * mtf)} (1.5x MTF)
          </Text>
        </View>
      </ScrollView>
      <CompleteButton action={null} />
    </>

  );
}
