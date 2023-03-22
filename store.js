import {configureStore} from '@reduxjs/toolkit';
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE,} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // blacklist: ['navigation'], // navigation will not be persisted
  // whitelist: ['navigation'], // only navigation will be persisted
}
const initialState = {
  today: 1,
  currentFieldValue: '',
  currentMaxPullUps: null,
  currentAmrap: null,
  currentScapHang: null,
  latestMaxPullUps: null,
  latestAmrap: null,
  latestScapHang: null,
};

function reducer(state = initialState, action) {
  console.log(action.type);

  switch (action.type) {
    case 'INCREMENT':
      if (state.today === 22) return state;

      return { ...state, today: state.today + 1 };
    case 'DECREMENT':
      if (state.today === 1) return state;

      return { ...state, today: state.today - 1 };
    case 'SET_CURRENT_MAX_PULL_UPS':
      return { ...state, currentMaxPullUps: action.value };
    case 'SET_CURRENT_AMRAP':
      return { ...state, currentAmrap: action.value };
    case 'SET_CURRENT_SCAP_HANG':
      return { ...state, currentScapHang: action.value };
    case 'SET_TEST_DAY_TOTAL':
      return { ...state, testDayTotal: state.currentAmrap + state.currentMaxPullUps }; // Should this be computed in the component?
    // case 'SET_LATEST_MAX_PULL_UPS':
    //   return { ...state, latestMaxPullUps: action.value };
    // case 'SET_LATEST_AMRAP':
    //   return { ...state, latestAmrap: action.value };
    case 'SET_LATEST_SCAP_HANG':
      return { ...state, latestScapHang: state.currentScapHang };
    case 'COMPLETE_TEST':
      return {
        ...state,
        latestMaxPullUps: state.currentMaxPullUps,
        latestAmrap: state.currentAmrap,
      };
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