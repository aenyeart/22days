import React from 'react';
import {Button, View} from 'react-native';
import {connect} from 'react-redux';

function Counter({ today, dispatch }) {
  return (
    <View>
      {/* <Button title="Increment" onPress={() => dispatch({ type: 'INCREMENT' })} /> */}
      <Button title="Previous" onPress={() => dispatch({ type: 'DECREMENT' })} />
      <Button title="JUMP TO END" onPress={() => dispatch({ type: 'TEST_DAYS' })} />

    </View>
  );
}

function mapStateToProps(state) {
  return {
    today: state.today
  };
}

export default connect(mapStateToProps)(Counter);
