import { Text } from '../Text.js';
import Input from '../NumberInput.js';
import CompleteButton from '../CompleteButton.js';
import { useState } from "react";
import { View, ScrollView } from 'react-native';
import TimelineNode from '../TimelineNode.js';
import Timeline from '../Timeline.js';
import CountdownTimer from '../CountdownTimer.js';
import { Divider } from "@rneui/themed";
import styles from "../../styles/styles.js";

export default ({ mtf, latestAmrap, today }) => {
  const [newMtf, setNewMtf] = useState(mtf);
  const [newAmrap, setNewAmrap] = useState(latestAmrap);
  const workoutStyles = styles.workoutStyles;

  return (
    <>
      {/* GREEN */}
      <ScrollView style={workoutStyles.inner} bounces='true'>
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
          <CountdownTimer seconds={120} timerText={"2 minute rest finished.\nTime to start the next exercise!"} />
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
      </ScrollView>
      <CompleteButton action={today === 1
        ? { type: 'SET_INITIAL_STATS', value: { newMtf, newAmrap } }
        : { type: 'COMPLETE_TEST', value: { newMtf, newAmrap } }
      } />
    </>
  );
}
