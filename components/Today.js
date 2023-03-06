import React from 'react';
import { Text, TextInput, View, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Incrementer from './Incrementer.js';
import Input from './Input.js';
import styles from "../styles/styles.js";
import workouts from '../constants/workouts.js'
import messages from '../constants/messages.js'

function Today({ lastCompletedDay, latestMaxPullUps, dispatch }) {
  const isTestDay = (day) => {
    return day % 4 === 1;
  };

  return (
    <View>
      <Text style={styles.title}>
        This is workout #{lastCompletedDay + 1}:
      </Text>

      <Text>
        {workouts[lastCompletedDay](latestMaxPullUps)}
      </Text>

      {
        isTestDay(lastCompletedDay + 1) &&
        <>
          <Text>
            Max pull-ups:
          </Text>
          <Input />
          {/* TODO Create two input cmpts: max & AMRAP */}
        </>
      }

      <Incrementer />
    </View>
  );
}

function mapStateToProps(state) {
  return {
    lastCompletedDay: state.lastCompletedDay,
    latestMaxPullUps: state.latestMaxPullUps,
  };
}

export default connect(mapStateToProps)(Today);

/* Data:
lastCompletedDay INT
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