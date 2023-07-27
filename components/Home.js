import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import DevMenu from './DevMenu.js';
import Today from './Today.js';
import messages from "../constants/messages";
// import styles from "../styles/styles.js";
import { connect } from 'react-redux'
import Report from "./workouts/Report.js";
import { Text } from "./Text.js";
import {SafeAreaProvider} from "react-native-safe-area-context";

function Home({ today, renderReport, initialMaxPullUps, initialAmrap, finalMaxPullUps, finalAmrap, dispatch }) {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider style={styles.outer}>
        {/* <View style={styles.main}> */}
        {renderReport ?
          <Report
            style={styles.container}
            initialMaxPullUps={initialMaxPullUps}
            initialAmrap={initialAmrap}
            finalMaxPullUps={finalMaxPullUps}
            finalAmrap={finalAmrap}
          /> :
          <>
            {/* {today === 1 && <Text style={styles.menuItem}>{messages.beginning}</Text>} */}
            <Today style={styles.container} />
            {/* <DevMenu /> */}
          </>
        }
        {/* </View> */}
      </SafeAreaProvider>
    </>
  );
}
function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
  outer: {

  },
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

