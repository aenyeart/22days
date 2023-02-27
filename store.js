import { configureStore } from '@reduxjs/toolkit';

const initialState = { count: 0, currentFieldValue: '', latestMaxPullUps: null };

function reducer(state = initialState, action) {
  console.log(action);

  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'SET_CURRENT_MAX_PULL_UPS':
      return { ...state, latestMaxPullUps: action.value };
    default:
      return state;
  }
}

const store = configureStore({reducer});

export default store;