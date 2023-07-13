import React from 'react';
import {Pressable, View} from 'react-native';
import {connect} from 'react-redux';
import { Text } from './Text.js';


function Counter({ dispatch }) {
  return (
    <View>
      <Pressable onPress={() => dispatch({ type: 'TEST_DAYS' })}>
        <Text>JUMP TO END</Text>
      </Pressable >

    </View>
  );
}

function mapStateToProps(state) {
  return {
    today: state.today
  };
}

export default connect(mapStateToProps)(Counter);
