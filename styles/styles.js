import {StyleSheet} from 'react-native';
import {StatusBar} from 'expo-status-bar';

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
    // marginHorizontal: 20,
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
  title: {
    fontSize: 24,
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
  pressable: {
    backgroundColor: '#6641AF',
    width: "100%",
    flex: 1,
    padding: 15,
    alignItems: 'center',
    // justifyContent: 'flex-start', // 'center' pushes content above statusbar
    // padding: 20,
    // marginVertical: 8,
    // marginHorizontal: 16,
  },
});

export default styles;
