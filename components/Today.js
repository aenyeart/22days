import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import { Text } from "./Text.js";
import { Divider } from "@rneui/themed";

import ScapHang from './workouts/ScapHang.js';
import Commando from './workouts/Commando.js';
import AmrapTest from './workouts/AmrapTest.js';
import MtfTest from './workouts/MtfTest.js';
import InitialTest from './workouts/InitialTest.js';
import ChinUps from './workouts/ChinUps.js';
import workoutAssigner from "../constants/workoutAssigner.js";
import Header from './Header.js';

function Today({ today, latestMaxPullUps, latestAmrap, latestScapHang, testDayTotal, dispatch }) {
  const workout = workoutAssigner(today);

  return (
    <>
      <Header />
      {/* Wrapper (RED) should fill remainder of screen height at full width  */}
      <View style={localStyles.wrapper}>
        <Text style={localStyles.title}>
          Workout #{today}:
        </Text>
        <Divider style={{ width: '80%', marginBottom: 20 }} />
        <View style={localStyles.workoutWrapper}>
          {
            (() => {
              switch (workout) {
                case "mtfTest":
                  return <MtfTest mtf={latestMaxPullUps} />;
                // CURRENT Idea: Keep the buttons where they are and manipulate the appearance via styling
                // Another Idea: trigger state change of "completionProps" to newMtf, which specifies the prop values passed to the button
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
                default:
                  return <Text>~~~ Hmmmmmm..... ~~~</Text>
              };
            })()
          }
        </View>
      </View>
    </>
  );
}

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(Today);

// TODO: Extract window dimensions to store for global use
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
    marginTop: .05 * height,
    // backgroundColor: "red" // DEBUG ONLY
  },
  workoutWrapper: {
    display: "flex",
    flex: '.8 0 auto',
    justifyContent: 'space-between',
    // backgroundColor: 'rgba(1, 128, 1, .75)', // DEBUG ONLY
  },
});
