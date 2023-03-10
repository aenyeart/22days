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
  currentMaxPullUps: null,
  currentAmrap: null,
  latestMaxPullUps: null,
  latestAmrap: null,
};

function reducer(state = initialState, action) {
  console.log(`ACTION >>>>>>`, action);

  switch (action.type) {
    case 'INCREMENT':
      return { ...state, lastCompletedDay: state.lastCompletedDay + 1 };
    case 'DECREMENT':
      return { ...state, lastCompletedDay: state.lastCompletedDay - 1 };
    case 'SET_CURRENT_MAX_PULL_UPS':
      return { ...state, currentMaxPullUps: action.value };
    case 'SET_CURRENT_AMRAP':
      return { ...state, currentAmrap: action.value };
    case 'SET_CURRENT_SCAP_HANG':
      return { ...state, currentScapHang: action.value };
    case 'SET_TEST_DAY_TOTAL':
      return { ...state, testDayTotal: state.currentAmrap + state.currentMaxPullUps }; // Should this be computed in the component?
    case 'SET_LATEST_MAX_PULL_UPS':
      return { ...state, latestMaxPullUps: action.value };
    case 'SET_LATEST_AMRAP':
      return { ...state, latestAmrap: action.value };
    case 'SET_LATEST_SCAP_HANG':
      return { ...state, latestScapHang: action.value };
    case 'COMPLETE_WORKOUT':
      return { ...state, currentMaxPullUps: initialState.currentMaxPullUps, currentAmrap: initialState.currentAmrap, ...action.value };
    case PURGE:
      return initialState;
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