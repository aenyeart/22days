import React from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';

function Counter({ today, dispatch }) {
  return (
    <View>
      <Button title="Increment" onPress={() => today < 22 &&dispatch({ type: 'INCREMENT' })} />
      <Button title="Decrement" onPress={() => today > 1 && dispatch({ type: 'DECREMENT' })} />
    </View>
  );
}

function mapStateToProps(state) {
  return {
    today: state.today
  };
}

export default connect(mapStateToProps)(Counter);
