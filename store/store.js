import {configureStore} from '@reduxjs/toolkit';
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE,} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SET_NEW_AMRAP, SET_NEW_MTF} from "./actions";

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // blacklist: ['navigation'], // navigation will not be persisted
  // whitelist: ['navigation'], // only navigation will be persisted
}
const initialState = {
  today: 1,
  currentFieldValue: '',
  newMtf: null,
  newAmrap: null,
  currentScapHang: null,
  initialMaxPullUps: null,
  latestMaxPullUps: null,
  latestAmrap: null,
  latestScapHang: null,
  history: [],
  renderReport: false,
};

function reducer(state = initialState, action) {
  console.log(action.type);

  switch (action.type) {
    case 'TEST_DAYS':
      return {...state, today: 21};
    case 'CLOSE_REPORT':
      return {...state, renderReport: false};
    case 'INCREMENT':
      if (state.today === 22) return state; // put logic for report here?
      return { ...state, today: state.today + 1 };
    case 'DECREMENT':
      if (state.today === 1) return state;
      return { ...state, today: state.today - 1 };
    case 'SET_INITIAL_STATS':
      return {
        ...state,
        latestMaxPullUps: state.newMtf,
        latestAmrap: state.newAmrap,
        initialMaxPullUps: state.newMtf,
        initialAmrap: state.newAmrap,
        testDayTotal: state.newAmrap + state.newMtf,}
    case SET_NEW_MTF:
      return { ...state, newMtf: action.value };
    case SET_NEW_AMRAP:
      return { ...state, newAmrap: action.value };
    case 'SET_FINAL_MAX_PULL_UPS':
      return { ...state, finalMaxPullUps: action.value };
    case 'SET_FINAL_AMRAP':
      console.log("val passed to finalAmrap", state.latestAmrap);
      return { ...state, finalAmrap: state.latestAmrap };
    case 'SET_CURRENT_SCAP_HANG':
      return { ...state, currentScapHang: action.value };
    case 'SET_TEST_DAY_TOTAL':
      return { ...state, testDayTotal: state.newAmrap + state.newMtf }; // Should this be computed in the component?
    case 'SET_LATEST_SCAP_HANG':
      return { ...state, latestScapHang: state.currentScapHang };
    case 'COMPLETE_TEST':
      return {
        ...state,
        latestMaxPullUps: state.newMtf,
        latestAmrap: state.newAmrap,
      };
    case 'START_NEW_CYCLE':
      return {
        ...state,
        today: 0,
        currentFieldValue: '',
        newMtf: null,
        newAmrap: null,
        currentScapHang: null,
        renderReport: false,
      };
    case 'SAVE_RESULTS':
      return {
        ...state,
        renderReport: true,
        history: [...state.history, {
          latestScapHang: state.latestScapHang,
          initialMaxPullUps: state.initialMaxPullUps,
          finalMaxPullUps: state.finalMaxPullUps,
          mtfDelta: state.finalMaxPullUps - state.initialMaxPullUps,
          initialAmrap: state.initialAmrap,
          finalAmrap: state.finalAmrap,
          amrapDelta : state.initialAmrap - state.finalAmrap,
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
