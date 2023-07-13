import {StatusBar} from 'expo-status-bar';
import {SafeAreaView} from 'react-native';
import DevMenu from './DevMenu.js';
import Today from './Today.js';
import messages from "../constants/messages";
import styles from "../styles/styles.js";
import {connect} from 'react-redux'
import Report from "./workouts/Report.js";
import {Text} from "./Text.js";

function Home({ today, renderReport, initialMaxPullUps, initialAmrap, finalMaxPullUps, finalAmrap, dispatch }) {
  return (
    <SafeAreaView style={styles.home}>
      <StatusBar style="auto" />
      {renderReport ?
        <Report
          style={styles.container}
          initialMaxPullUps={initialMaxPullUps}
          initialAmrap={initialAmrap}
          finalMaxPullUps={finalMaxPullUps}
          finalAmrap={finalAmrap}
        /> :
        <>
          {today === 1 && <Text style={styles.menuItem}>{messages.beginning}</Text>}
          <Today style={styles.container}/>
          <DevMenu />
        </>
      }

    </SafeAreaView>
  );
}
function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(Home);

