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
              <Text style={workoutStyles.text}>FINAL Test – Maximum consecutive pull-ups until failure (no breaks):</Text>
              <Input
                initialValue={mtf}
                handleChange={setNewMtf}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <CompleteButton title='Finish & View Report' action={{ type: 'SAVE_RESULTS', value: newMtf }} />
    </>
  );
}
