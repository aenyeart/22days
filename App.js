import {Text} from './components/Text.js';
import Home from './components/Home.js';
import {store, persistor} from './store/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {LinearGradient} from "expo-linear-gradient";
import styles from "./styles/styles";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {useEffect} from "react";
import * as Permissions from "expo-permissions";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true
    }}
})

export default function App() {
  useEffect(() => {
    Permissions.getAsync(Permissions.NOTIFICATIONS).then((statusObj) => {
      if (statusObj.status !== "granted") {
        return Permissions.askAsync(Permissions.NOTIFICATIONS)
      }
      return statusObj;
    }).then((statusObj) => {
      if (statusObj.status !== "granted") {
        return;
      }
    })
  }, [])

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
