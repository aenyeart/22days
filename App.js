import {Text} from 'react-native';
import Home from './components/Home.js';
import {Provider} from 'react-redux';
import {persistor, store} from './store';
import {PersistGate} from 'redux-persist/integration/react';
import {LinearGradient} from "expo-linear-gradient";
import styles from "./styles/styles";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <LinearGradient
          colors={['rgba(72, 56, 103, 1)', 'rgba(61, 120, 234, 1)']}
          useAngle={true}
          angle={123}
          style={styles.background}
        />
        <Home />
      </PersistGate>
    </Provider>
  );
}
