import { Pressable } from 'react-native';
import { Text } from './Text.js';
import {connect} from 'react-redux';

function CompleteButton({ action, dispatch, title = "Complete workout"}) {
  return (
    <Pressable
    style={{width: "100%"}}
    onPress={() => {
      action && dispatch(action);
      dispatch({ type: 'INCREMENT'});
    }} >
      <Text>{title}</Text>
    </Pressable>
  )
}
function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(CompleteButton);
