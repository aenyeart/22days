import {Text} from 'react-native';
import Home from './components/Home.js';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <Home />
      </PersistGate>
    </Provider>
  );
}
