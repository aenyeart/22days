import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import { Text } from "./Text.js";
import { Divider } from "@rneui/themed";

import Report from './workouts/Report.js';
import ScapHang from './workouts/ScapHang.js';
import Commando from './workouts/Commando.js';
import AmrapTest from './workouts/AmrapTest.js';
import MtfTest from './workouts/MtfTest.js';
import InitialTest from './workouts/InitialTest.js';
import ChinUps from './workouts/ChinUps.js';
import workoutAssigner from "../constants/workoutAssigner.js";
import Header from './Header.js';

function Today({ today, renderReport, latestMaxPullUps, latestAmrap, latestScapHang, testDayTotal, dispatch, initialMaxPullUps, initialAmrap, finalMaxPullUps, finalAmrap }) {
  const workout = workoutAssigner(today, renderReport);
  const renderTodaysWorkout = () => {
    switch (workout) {
      case "mtfTest":
        return <MtfTest mtf={latestMaxPullUps} />;
      case "amrapTest":
        return <AmrapTest tdt={testDayTotal} latestAmrap={latestAmrap} />;
      case "scapHang":
        return <ScapHang mtf={latestMaxPullUps} scapHang={latestScapHang} />;
      case "chinUps":
        return <ChinUps mtf={latestMaxPullUps} />
      case "commando":
        return <Commando mtf={latestMaxPullUps} />;
      case "initialTest":
        return <InitialTest mtf={latestMaxPullUps} latestAmrap={latestAmrap} today={today} />;
      case "report":
        return <Report />;
      default:
        return <Text>~~~ Hmmmmmm..... ~~~</Text>
    };
  }

  return (
    <>
      <Header />
      {/* Wrapper (RED) should fill remainder of screen height at full width  */}
      <View style={localStyles.wrapper}>
        {/* <Text style={localStyles.title}>
          {renderReport ? `FINAL REPORT:` : `Workout #${today}:`}
        </Text>
        <Divider style={{ width: '80%', marginBottom: 20 }} /> */}
        <View style={localStyles.workoutWrapper}>
          {renderTodaysWorkout()}
        </View>
      </View>
    </>
  );
}

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(Today);

const { height, width } = Dimensions.get('window');
const localStyles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
    width: '80%',
  },
  wrapper: {
    display: "flex",
    width: "100%",
    height: height,
    alignItems: 'center',
    // marginTop: .05 * height,
    // backgroundColor: "red" // DEBUG ONLY
  },
  workoutWrapper: {
    display: "flex",
    // flex: '.8 0 auto', // TODO expand out instead of flex shorthand
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'rgba(1, 128, 1, .75)', // DEBUG ONLY
  },
});
