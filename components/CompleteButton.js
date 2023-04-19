import {Button} from 'react-native';
import {connect} from 'react-redux';

function CompleteButton({ action, dispatch, title = "Complete workout"}) {
  return (
    <Button title={title} onPress={() => {
      action && dispatch({type: action.type});
      dispatch({ type: 'INCREMENT'});
    }} />
  )
}
function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(CompleteButton);
