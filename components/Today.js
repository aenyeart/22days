import React from 'react';
import {
  Pressable,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import { Text } from "./Text.js";
import { Icon, Divider } from "@rneui/themed";
import { Header } from "@rneui/base";

import ScapHang from './workouts/ScapHang.js';
import Commando from './workouts/Commando.js';
import AmrapTest from './workouts/AmrapTest.js';
import MtfTest from './workouts/MtfTest.js';
import InitialTest from './workouts/InitialTest.js';
import ChinUps from './workouts/ChinUps.js';
import workoutAssigner from "../constants/workoutAssigner.js";


function Today({ today, latestMaxPullUps, latestAmrap, latestScapHang, testDayTotal, dispatch }) {
  const workout = workoutAssigner(today);

  return (
    <>
      <Header
        // TODO: Extract styles to localStyles object below
        containerStyle={{
          // paddingHorizontal: "10%",
          borderBottomWidth: 0,
          borderBottomRightRadius: 35,
          backgroundColor: "rgba(255, 255, 255, .3)",
        }}

        // placement={'left'}
        // leftContainerStyle={{ width: 25 }}
        // rightContainerStyle={{ width: 10 }}

        centerContainerStyle={{ paddingHorizontal: 0 }}
        centerComponent={
          <Pressable type="outline"
            style={{
              width: '100%',
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 50,
            }}
            onPress={() => dispatch({ type: 'DECREMENT' })}
          >
            <Icon name="return-up-back" type="ionicon" color="white" size={24} style={{
              padding: 12,
            }} />
            <Text style={{
              fontWeight: "600",
              fontSize: 20
            }}>
              Previous Workout
            </Text>
          </Pressable>
        }
      />

      {/* Wrapper (RED) should fill remainder of screen height at full width  */}
      <View style={localStyles.wrapper}>
        <Text style={localStyles.title}>
          Workout #{today}:
        </Text>
        <Divider style={{ width: '80%', marginBottom: 20 }} />
        {
          (() => {
            switch (workout) {
              case "mtfTest":
                return <MtfTest mtf={latestMaxPullUps} style={localStyles.workoutStyles} />;
              // CURRENT Idea: Keep the buttons where they are and manipulate the appearance via styling
              // Another Idea: trigger state change of "completionProps" to newMtf, which specifies the prop values passed to the button
              case "amrapTest":
                return <AmrapTest tdt={testDayTotal} latestAmrap={latestAmrap} style={localStyles.workoutStyles} />;
              case "scapHang":
                return <ScapHang mtf={latestMaxPullUps} scapHang={latestScapHang} style={localStyles.workoutStyles} />;
              case "chinUps":
                return <ChinUps mtf={latestMaxPullUps} style={localStyles.workoutStyles} />
              case "commando":
                return <Commando mtf={latestMaxPullUps} style={localStyles.workoutStyles} />;
              case "initialTest":
                return <InitialTest mtf={latestMaxPullUps} latestAmrap={latestAmrap} today={today} style={localStyles.workoutStyles} />;
              default:
                return <Text>~~~ Hmmmmmm..... ~~~</Text>
            };
          })()
        }
      </View>
      {/* </View> */}
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
  workoutStyles: {
    outer: {
      display: "flex",
      flex: '.8 0 auto',
      justifyContent: 'space-between',
      // backgroundColor: 'rgba(1, 128, 1, .75)', // DEBUG ONLY
    },
    inner: {
      display: 'flex',
      flex: '.85 1 auto',
      alignSelf: 'stretch',
      marginVertical: 20,
      paddingBottom: 60,
      width: .8 * width,
      flexDirection: 'column',
      alignItems: 'left',
      justifyContent: 'space-between',
      // backgroundColor: 'rgba(255, 0, 255, .75)', // DEBUG ONLY
    },
    text: {
      paddingLeft: 8
    },
  },
});
