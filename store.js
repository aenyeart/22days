import { configureStore } from '@reduxjs/toolkit';

const initialState = { count: 0, currentFieldValue: '', latestMaxPullUps: null };

function reducer(state = initialState, action) {
  console.log(action);

  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'INPUT_CURRENT_MAX_PULL_UPS':
      return { ...state, currentFieldValue: action.value };
    case 'SET_CURRENT_MAX_PULL_UPS':
      return { ...state, latestMaxPullUps: state.currentFieldValue, currentFieldValue: '' };
    default:
      return state;
  }
}

const store = configureStore({reducer});

export default store;