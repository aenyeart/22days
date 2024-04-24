import { Text } from "../Text.js";
import { useState } from "react";
import { View, ScrollView } from 'react-native';
import { Divider } from "@rneui/themed";
import CompleteButton from '../CompleteButton.js';
import TimelineNode from "../TimelineNode";
import Timeline from "../Timeline";
import styles from '../../styles/styles'

export default ({ initialMaxPullUps, initialAmrap, finalMaxPullUps, finalAmrap, today }) => {
  const [workoutHeight, setWorkoutHeight] = useState(0);
  const getHeightForTimeline = (event) => {
    let { height } = event.nativeEvent.layout;
    height += 20;
    console.log('Report height check', height);
    setWorkoutHeight(height);
  }
  const mtfDelta = finalMaxPullUps - initialMaxPullUps;
  const amrapDelta = finalAmrap - initialAmrap;
  return (
    <>
      <ScrollView bounces='true' style={styles.workoutStyles.inner}>
        <Text style={{
          textAlign: 'center',
          alignSelf: 'center',
          fontSize: 24,
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 20,
          width: '80%',
        }}>
          Results Report:
        </Text>
        <Divider style={{ width: "100%", marginBottom: 20 }} />

        <View style={{
          flexDirection: 'row',
        }}
          onLayout={getHeightForTimeline}
        >
          {/* <Timeline style={{ height: this.workoutHeight }} /> */}

          <View style={{}}>
            <View >
              {/* <TimelineNode /> */}

              <View >
                <Text style={styles.h2}>
                  Max-to-Failure Pull-Ups:{`\n`}
                </Text>
                <Text>
                  Day 1: {initialMaxPullUps} reps{`\n`}
                  Day 22: {finalMaxPullUps} reps{`\n`}
                  Change to Max Pull-Ups: {mtfDelta} reps ({Math.round(100 * mtfDelta / initialMaxPullUps)}%){`\n`}
                </Text>
              </View>


              <View>
                <Text style={styles.h2}>
                  {`\n`}
                  5-minute AMRAP:{`\n`}
                </Text>
                <Text>
                  Day 1: {initialAmrap} reps{`\n`}
                  Day 21: {finalAmrap} reps{`\n`}
                  Change to AMRAP: {amrapDelta} reps ({Math.round(100 * amrapDelta / initialAmrap)}%) {`\n`}
                </Text >
              </View>

              <Divider style={{ width: '80%', paddingVertical: 20, alignSelf: "center" }} />

              <Text style={{ paddingTop: 15, alignSelf: "center" }}>
                {/* {`\n`} */}
                Want to continue the gains?
                {/* {`\n`} */}
              </Text>

            </ View>
          </ View>
        </ View>

      </ScrollView>

      <CompleteButton
        title='Start New 22-Day Cycle'
        action={{ type: 'START_NEW_CYCLE' }}
      />
      {/* </View> */}
    </>
  );
}
