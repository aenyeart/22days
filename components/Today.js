import React from 'react';
import { Text, ScrollView, View, Button, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import styles from "../styles/styles.js";
import TodaysWorkout from './TodaysWorkout.js';

function Today({ today, latestMaxPullUps }) {
  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

        <Text style={styles.title}>
          This is workout #{today}:
        </Text>

        {latestMaxPullUps !== null && <Text>Latest max pull-ups: {latestMaxPullUps}</Text>}
        <TodaysWorkout />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

function mapStateToProps(state) {
  console.log('STATE ', state);
  return { ...state };
}

export default connect(mapStateToProps)(Today);
