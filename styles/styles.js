import {StyleSheet} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import { Dimensions } from 'react-native';

export const screen = Dimensions.get('window');
const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  home: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    alignItems: 'center',
    justifyContent: 'flex-start', // 'center' pushes content above statusbar
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
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
  report: {
    // flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    // padding: 20,
    // backgroundColor: '#3f0',
    // alignItems: 'center',
    // justifyContent: 'flex-start', // 'center' pushes content above statusbar
    // backgroundColor: 'red',
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  h2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'green'
  },
 DevMenuItem: {
    backgroundColor: '#000',
    width: "100%",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  workoutStyles: {
    inner: {
      display: 'flex',
      flex: '.85 1 auto',
      // alignSelf: 'stretch',
      marginVertical: 20,
      paddingBottom: 60,
      width: .8 * screen.width,
      flexDirection: 'column',
      // alignItems: 'left',
      // justifyContent: 'space-between',
      // backgroundColor: 'rgba(255, 0, 255, .75)', // DEBUG ONLY
    },
    text: {
      paddingLeft: 8
    },
  },
});

export default styles;
