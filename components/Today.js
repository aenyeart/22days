import React from 'react';
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import styles from "../styles/styles.js";
import TodaysWorkout from './TodaysWorkout.js';
import {Text} from "./Text.js";
import {Button, Icon} from "@rneui/themed";

function Today({ today }) {
  return (
    <KeyboardAvoidingView behavior="padding" style={{ width: "100%" }}>
      <ScrollView contentContainerStyle={{ width: "100%" }}>
        <Button type="outline"
                containerStyle={{width: '60%'}}
                buttonStyle={{ justifyContent: 'flex-start' }}>
          <Icon name="back-in-time" type="entypo" color="white" />
          <Text>Previous Workout</Text>
        </Button>
            <Text style={styles.title}>
              This is workout #{today}:
            </Text>
            <TodaysWorkout />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(Today);
