import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView } from 'react-native';
import Menu from './Menu.js';
import Today from './Today.js';
import messages from "../constants/messages";
import styles from "../styles/styles.js";
import { connect } from 'react-redux'

function Home({ lastCompletedDay, dispatch }) {
  return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.menuItem}>{messages.beginning}</Text>
        <Today />
        <Menu />
      </SafeAreaView>
  );
}
function mapStateToProps(state) {
  return {
    lastCompletedDay: state.lastCompletedDay,
  };
}

export default connect(mapStateToProps)(Home);

