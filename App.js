import Home from './components/Home.js';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
