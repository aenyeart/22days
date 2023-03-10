import React from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';

function Counter({ lastCompletedDay, dispatch }) {
  return (
    <View>
      <Button title="Increment" onPress={() => lastCompletedDay < 21 &&dispatch({ type: 'INCREMENT' })} />
      <Button title="Decrement" onPress={() => lastCompletedDay > 0 && dispatch({ type: 'DECREMENT' })} />
    </View>
  );
}

function mapStateToProps(state) {
  return {
    lastCompletedDay: state.lastCompletedDay
  };
}

export default connect(mapStateToProps)(Counter);
