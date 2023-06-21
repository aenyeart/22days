import {StatusBar} from 'expo-status-bar';
import {SafeAreaView} from 'react-native';
import Menu from './Menu.js';
import Today from './Today.js';
import messages from "../constants/messages";
import styles from "../styles/styles.js";
import {connect} from 'react-redux'
import Report from "./workouts/Report.js";
import {Text} from "./Text.js";

function Home({ today, renderReport, initialMaxPullUps, initialAmrap, finalMaxPullUps, finalAmrap, dispatch }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {renderReport ?
        <Report
          style={styles.report}
          initialMaxPullUps={initialMaxPullUps}
          initialAmrap={initialAmrap}
          finalMaxPullUps={finalMaxPullUps}
          finalAmrap={finalAmrap}
        /> :
        <>
          {today === 1 && <Text style={styles.menuItem}>{messages.beginning}</Text>}
          <Today />
          <Menu />
        </>
      }

    </SafeAreaView>
  );
}
function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(Home);

