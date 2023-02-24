import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Menu from './components/Menu.js';
import Input from './components/Input.js';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is the beginning of your pullup journey!</Text>
      <Menu/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "purple",
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

