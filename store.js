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
  history: [],
};

function reducer(state = initialState, action) {
  console.log(action.type);

  switch (action.type) {
    case 'INCREMENT':
      if (state.today === 22) return state; // put logic for report here?
      return { ...state, today: state.today + 1 };
    case 'DECREMENT':
      if (state.today === 1) return state;
      return { ...state, today: state.today - 1 };
    case 'SET_INITIAL_STATS':
      return { ...state, initialMaxPullUps: state.currentMaxPullUps, initialAmrap: state.currentAmrap}
      // return { ...state, currentMaxPullUps: action.value }; // dead line?
    case 'SET_CURRENT_MAX_PULL_UPS':
      return { ...state, currentMaxPullUps: action.value };
    case 'SET_CURRENT_AMRAP':
      return { ...state, currentAmrap: action.value };
    case 'SET_FINAL_MAX_PULL_UPS':
      return { ...state, finalMaxPullUps: action.value };
    case 'SET_FINAL_AMRAP':
      return { ...state, finalAmrap: action.value };
    case 'SET_CURRENT_SCAP_HANG':
      return { ...state, currentScapHang: action.value };
    case 'SET_TEST_DAY_TOTAL':
      return { ...state, testDayTotal: state.currentAmrap + state.currentMaxPullUps }; // Should this be computed in the component?
    case 'SET_LATEST_SCAP_HANG':
      return { ...state, latestScapHang: state.currentScapHang };
    case 'COMPLETE_TEST':
      return {
        ...state,
        latestMaxPullUps: state.currentMaxPullUps,
        latestAmrap: state.currentAmrap,
      };
    case 'SAVE_RESULTS':
      return {
        ...state,
        history: [...state.history, {
          latestScapHang: state.latestScapHang,
          initialMaxPullUps: state.initialMaxPullUps,
          finalMaxPullUps: state.finalMaxPullUps,
          mtfDelta: state.finalMaxPullUps - state.initialMaxPullUps,
          initialAmrap: state.initialAmrap,
          finalAmrap: state.finalAmrap,
          amrapDelta : state.initialAmrap - state.finalAmrap,
          latestScapHang: state.latestScapHang,
        }]
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