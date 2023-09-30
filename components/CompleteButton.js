import { Pressable, StyleSheet, Dimensions } from 'react-native';
import { Text } from './Text.js';
import { connect } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

function CompleteButton({ action, dispatch, title = "Complete Workout" }) {
  const handlePress = () => {
    action && dispatch(action);
    dispatch({ type: 'INCREMENT' });
  }

  return (
    <LinearGradient
      colors={['rgba(102, 65, 175, 1)', 'rgba(4, 25, 105, 1)']}
      start={{ x: 0.47, y: 0 }}
      end={{ x: .52, y: 1 }}
      style={localStyles.gradient}
      onPressIn={() => { console.log("press in") }}
    >
      <Pressable
        onPress={() => { handlePress() }}
        style={localStyles.button}
        // hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} // Increase hitSlop. BUG Not working since nesting in LinearGradient.
      >
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
    </LinearGradient>
  )
}

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(CompleteButton);
const { height, width } = Dimensions.get('window');
const localStyles = StyleSheet.create({
  gradient: {
    backgroundColor: '#6641AF',
    width: 1.05 * width,
    alignItems: 'center',
    position: 'absolute',
    left: "-12%", // NOTE: if button loses alignment, adjust this value
    bottom: -2,
    borderTopLeftRadius: 45,
  },
  button: {
    width: '100%',
    padding: 15,
    paddingBottom: 25,
    borderTopLeftRadius: 45,
  }
});