import React from 'react';
import { Text, ScrollView, View, Button, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import styles from "../styles/styles.js";
import TodaysWorkout from './TodaysWorkout.js';

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

        {/* <Text>
          {workouts[workoutAssignment(today)](latestMaxPullUps)}
        </Text> */}

        <View>
          <TodaysWorkout workout={workoutAssigner}/>
          {/* {renderInputs(workoutAssignment(today), dispatch, currentMaxPullUps, currentAmrap)} */}
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
  console.log('STATE ', state);
  return { ...state };
  // return {
  //   today: state.today,
  //   latestMaxPullUps: state.latestMaxPullUps,
  //   latestAmrap: state.latestAmrap,
  //   latestScapHang: state.latestScapHang,
  //   currentMaxPullUps: state.currentMaxPullUps,
  //   currentAmrap: state.currentAmrap,
  //   currentScapHang: state.currentScapHang,
  // };
}

export default connect(mapStateToProps)(Today);
