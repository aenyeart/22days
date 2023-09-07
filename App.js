import {Text} from './components/Text.js';
import Home from './components/Home.js';
import { store, persistor } from './store/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {LinearGradient} from "expo-linear-gradient";
import styles from "./styles/styles";
import {SafeAreaProvider} from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <LinearGradient
          colors={['rgba(72, 56, 103, 1)', 'rgba(61, 120, 234, 1)']}
          start={{x: 0, y: .25}}
          end={{x: 1, y: .72}}
          locations={[0.1, 1]}
          style={styles.background}
        />
        <Home />
      </PersistGate>
    </Provider>
    </SafeAreaProvider>
  );
}
