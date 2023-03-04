import React from 'react';
import { Text, TextInput, View, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Incrementer from './Incrementer.js';
import Input from './Input.js';
import styles from "../styles/styles.js";


function Today({ lastCompletedDay, dispatch }) {

  const workouts = [
    "First test day:\n",
    "Second day workout"
  ];

  const isTestDay = (day) => {
    return day % 4 === 1;
  };

  return (
    <View>
      <Text>
        Today is workout #{lastCompletedDay + 1}.
      </Text>

      {isTestDay(lastCompletedDay + 1) &&
      <Text>
        Test – Max pull-ups to failure (MTF)
          <Input />
          {/* TODO Create two input cmpts: max & AMRAP */}
          {"\n"}2 min rest, {"\n"}5-min AMRAP,{"\n"}& Test Day Total (TDT)
      </Text>}

      <Text>
        {workouts[lastCompletedDay]}
      </Text>
      <Incrementer />
    </View>
  );
}
// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     color: 'green'
//   },
// });

function mapStateToProps(state) {
  return {
    lastCompletedDay: state.lastCompletedDay,
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