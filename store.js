import { configureStore } from '@reduxjs/toolkit';

const initialState = { lastCompletedDay: 0, currentFieldValue: '', latestMaxPullUps: null };

function reducer(state = initialState, action) {
  console.log(action);

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

const store = configureStore({reducer});

export default store;