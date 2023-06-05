import React from 'react';
import {Pressable, View} from 'react-native';
import {connect} from 'react-redux';

function Counter({ today, dispatch }) {
  return (
    <View>
      {/* <Pressable title="Increment" onPress={() => dispatch({ type: 'INCREMENT' })} /> */}
      <Pressable title="Previous" onPress={() => dispatch({ type: 'DECREMENT' })} />
      <Pressable title="JUMP TO END" onPress={() => dispatch({ type: 'TEST_DAYS' })} />

    </View>
  );
}

function mapStateToProps(state) {
  return {
    today: state.today
  };
}

export default connect(mapStateToProps)(Counter);
