import { configureStore } from '@reduxjs/toolkit';

const initialState = { count: 0, latestMaxPullUps: null };

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'SET_CURRENT_MAX_PULL_UPS':
      return { latestMaxPullUps: action.value };
    default:
      return state;
  }
}

const store = configureStore({reducer});

export default store;