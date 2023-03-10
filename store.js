import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import AsyncStorage  from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // blacklist: ['navigation'], // navigation will not be persisted
  // whitelist: ['navigation'], // only navigation will be persisted
}
const initialState = {
  lastCompletedDay: 0,
  currentFieldValue: '',
  latestMaxPullUps: 0 // previously 'null'
};

function reducer(state = initialState, action) {
  console.log(`ACTION >>>>>>`, action);

  switch (action.type) {
    case 'INCREMENT':
      return { ...state, lastCompletedDay: state.lastCompletedDay + 1 };
    case 'DECREMENT':
      return { ...state, lastCompletedDay: state.lastCompletedDay - 1 };
    case 'SET_CURRENT_MAX_PULL_UPS':
      return { ...state, latestMaxPullUps: action.value };
    default:
      return state;
  }
}
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);