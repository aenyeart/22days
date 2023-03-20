import {Button} from 'react-native';
import {connect} from 'react-redux';

function CompleteButton({action, dispatch}) {
  return (
    <Button title="Complete workout" onPress={() => {
      dispatch({type: action});
      dispatch({ type: 'INCREMENT'});
    }} />
  )
}
function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(CompleteButton);
