import { Pressable, StyleSheet, Dimensions } from 'react-native';
import { Text } from './Text.js';
import { connect } from 'react-redux';

function CompleteButton({ action, dispatch, title = "Complete Workout" }) {
  const handlePress = () => {
    action && dispatch(action);
    dispatch({ type: 'INCREMENT' });
  }

  return (
    <Pressable
      style={localStyles}
      onPress={() => { handlePress() }} >
      <Text style={{
        backgroundColor: "transparent",
        margin: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 20,
      }}>
        {title}
      </Text>
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
  width: 1.05 * width,
  // flex: 1,  // NOTE: this is what was causing the text to not show up
  padding: 15,
  alignItems: 'center',
  position: 'absolute',
  left: "-13%", // NOTE: if button loses alignment, adjust this value
  bottom: -2,
  borderTopLeftRadius: 40,
});