import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import DevMenu from './DevMenu.js';
import Today from './Today.js';
import messages from "../constants/messages";
// import styles from "../styles/styles.js";
import { connect } from 'react-redux'
import Report from "./workouts/Report.js";
import { Text } from "./Text.js";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CompleteButton from './CompleteButton.js';

function Home({ today, renderReport, initialMaxPullUps, initialAmrap, finalMaxPullUps, finalAmrap, dispatch }) {
  return (
    <>
      <StatusBar style="auto" />
      <Today style={styles.container} />
      {/* <Report
        style={styles.}
        initialMaxPullUps={initialMaxPullUps}
        initialAmrap={initialAmrap}
        finalMaxPullUps={finalMaxPullUps}
        finalAmrap={finalAmrap}
      /> */}
      {/* <DevMenu /> */}
      {/*
        - One quick way to get the complete button all the way at the bottom at full width is to place it beneath the SafeAreaProvider. (This button could be placed in the Today component, but I'm not sure how to get it to the bottom of the screen at full width yet.)
        - Another way would be to place it in the Today component, and then use flexbox to push it to the bottom of the screen. (This would be a good way to learn flexbox.)
        - Another way would be to place it in the Today component, and then use absolute positioning to push it to the bottom of the screen. (This would be a good way to learn absolute positioning.)
      */}
      {/*
      TODO: Add logic to conditionally render CompleteButton on all days except the report view.
      Perhaps the report view could be a modal that pops up when the user clicks the CompleteButton on the last day.
      */}
    </>
  );
}
function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'flex-start', // 'center' pushes content above statusbar
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  main: {
    // paddingHorizontal: '10%',

  },
});

