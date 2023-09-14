import { Pressable, StyleSheet, Dimensions } from 'react-native';
import { Text } from './Text.js';
import { connect } from 'react-redux';

function CompleteButton({ action, dispatch, title = "Complete Workout" }) {
  return (
    <Pressable
      style={localStyles}
      onPress={() => {
        action && dispatch(action);
        dispatch({ type: 'INCREMENT' }) ;
      }} >
      <Text style={{ backgroundColor: "transparent", margin: 10, }}>{title}</Text>
    </Pressable>
  )
}

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(CompleteButton);
const { height, width } = Dimensions.get('window');

const localStyles = StyleSheet.create({
  backgroundColor: '#6641AF',
  width: 1.1 * width,
  // flex: 1,  // NOTE: this is what was causing the text to not show up
  padding: 15,
  alignItems: 'center',
  position: 'absolute',
  left: "-11%", // NOTE: if button loses alignment, adjust this value
  bottom: -2,
  borderTopLeftRadius: 40,
});