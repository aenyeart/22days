import { Pressable } from 'react-native';
import { Text } from './Text.js';
import {connect} from 'react-redux';
import styles from '../styles/styles'

function CompleteButton({ action, dispatch, title = "Complete workout"}) {
  return (
    <Pressable
    style={styles.pressable}
    onPress={() => {
      action && dispatch(action);
      dispatch({ type: 'INCREMENT'});
    }} >
      <Text style={{backgroundColor: "transparent"}}>{title}</Text>
    </Pressable>
  )
}
function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(CompleteButton);
