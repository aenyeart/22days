import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import DevMenu from './DevMenu.js';
import Today from './Today.js'

function Home() {
  return (
    <>
      <StatusBar style="auto" />
      <Today style={styles.container} />
      {/* <DevMenu /> */}
    </>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    // marginTop: StatusBar.currentHeight || 0,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'flex-start', // 'center' pushes content above statusbar
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
});

