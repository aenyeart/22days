import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView } from 'react-native';
import Menu from './Menu.js';
import Today from './Today.js';
import messages from "../constants/messages";
import styles from "../styles/styles.js";
import { connect } from 'react-redux'

function Home({ today, dispatch }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {today === 1 && <Text style={styles.menuItem}>{messages.beginning}</Text>}
      {/* <Text style={styles.menuItem}>{today === 0 ? messages.beginning : `some other text`}</Text> */}
      <Today />
      <Menu />
    </SafeAreaView>
  );
}
function mapStateToProps(state) {
  return {
    today: state.today,
  };
}

export default connect(mapStateToProps)(Home);

