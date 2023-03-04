import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Menu from './components/Menu.js';
// import Input from './components/Input.js';
import Today from './components/Today.js';
import { Provider } from 'react-redux';
import store from './store';
import styles from "./styles/styles.js";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <StatusBar style="auto" />
        <Text style={styles.title}>This is the beginning of your pullup journey!</Text>
        <Today />
        <Menu />
        {/* <Input /> */}
      </Provider>
    </SafeAreaView>
  );
}


