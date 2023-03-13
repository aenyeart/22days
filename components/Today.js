import React from 'react';
import { Text, ScrollView, View, Button, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import Incrementer from './Incrementer.js';
import Input from './Input.js';
import styles from "../styles/styles.js";
import workouts from '../constants/workouts.js'
import messages from '../constants/messages.js'

// const isTestDay = (day) => {
//   return day % 4 === 1;
// };

const workoutAssignment = (currDay) => {
  if (currDay === 22) return "mtfTest";
  if (currDay === 21) return "amrapTest";
  if (currDay % 4 === 0) return "scapHang";
  if (currDay % 4 === 3) return "commando";
  if (currDay % 4 === 2) return "chinUps";
  if (currDay % 4 === 1) return "initialTest";
  return null;
}

const renderInputs = (workout, dispatch, currentMaxPullUps, currentAmrap, currentScapHang) => {
  console.log('workout >>>', workout);
  switch (workout) {
    case "mtfTest":
      return <>
      <Text>MTF Test</Text>
      <Input placeholder="Enter your max pull-ups" actionType="SET_CURRENT_MAX_PULL_UPS" />
      </>;
    case "amrapTest":
      return <>
      <Text>AMRAP Test</Text>
        <Input placeholder="Enter your 5-min AMRAP" actionType="SET_CURRENT_AMRAP" />
      </>;
    case "scapHang":
      return <>
      <Text>Scap-Pull Hang</Text>
        <Input placeholder="Enter scap-pull hang duration (seconds)" actionType="SET_CURRENT_SCAP_HANG" />
      </>;
    case "initialTest":
      return <>
        <Text>Max consecutive pull-ups:</Text>
        <Input placeholder="Enter your max pull-ups" actionType="SET_CURRENT_MAX_PULL_UPS" />
        <Text>AMRAP pull-ups in five minutes:</Text>
        <Input placeholder="Enter your AMRAP" actionType="SET_CURRENT_AMRAP" />

      </>;
    default:
      return;
      // return <Text>~~~ No logging reps needed for this workout ~~~</Text>
  };
}

function Today({ today, latestMaxPullUps, currentMaxPullUps, latestAmrap, currentAmrap, latestScapHang, currentScapHang, dispatch }) {
  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

        <Text style={styles.title}>
          This is workout #{today}:
        </Text>

        {latestMaxPullUps !== null &&
          <Text>Latest max pull-ups: {latestMaxPullUps}</Text>
        }

        <Text>
          {workouts[workoutAssignment(today)](latestMaxPullUps)}
        </Text>

        <View>
          {renderInputs(workoutAssignment(today), dispatch, currentMaxPullUps, currentAmrap)}
        </View>
        <Button title="Complete workout" onPress={() => {
          dispatch({
            type: 'COMPLETE_WORKOUT', value: {
              latestMaxPullUps: currentMaxPullUps,
              latestAmrap: currentAmrap,
              latestScapHang: currentScapHang,
            }
          });
        }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

function mapStateToProps(state) {
  return {
    today: state.today,
    latestMaxPullUps: state.latestMaxPullUps,
    latestAmrap: state.latestAmrap,
    latestScapHang: state.latestScapHang,
    currentMaxPullUps: state.currentMaxPullUps,
    currentAmrap: state.currentAmrap,
    currentScapHang: state.currentScapHang,
  };
}

export default connect(mapStateToProps)(Today);
// export connect(mapDispatchTo)(renderInputs);

/* Data:
today INT
latestMaxPullUps INT
workoutComplete BOOL (incr, trigger modal/user feedback)
workouts ARR of ARR of STRINGS

## Program Outline
Four-day block, repeated five times over 20 days:
1. Test – Max to failure (MTF), 2 min rest, 5-min AMRAP, & Test Day Total (TDT)
2. Chin-ups (2x current MTF), 2 min rest, Pullups (1.4x MTF)
3. Commando Pullups (2x current MTF), 2 min rest, Pullups (1.5x MTF)
4. Scap-Pull Hang (until failure or prev time +5 sec), 2 min rest, Pullups (1.6x MTF)
…
21. Test – Do TDT from day one w/in 5 min
22. Test – Update MTF pullups

*/