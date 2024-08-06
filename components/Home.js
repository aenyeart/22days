import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import DevMenu from './DevMenu.js';
import Today from './Today.js'

function Home() {
  return (
    <>
      {/* <StatusBar style="auto" /> */}
      <Today styles={styles} />
      {/* <DevMenu /> */}
    </>
  );
}

export default Home;

const styles = StyleSheet.create({
  flex: 1,
});

