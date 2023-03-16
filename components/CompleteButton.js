import { Button } from 'react-native';
import { connect } from 'react-redux';

function CompleteButton({action, dispatch}) {


  return (
    <Button title="Complete workout" onPress={() => {
      dispatch({type: action});
    }} />
  )
}
function mapStateToProps(state) {
  // console.log('STATE ', state);
  return { ...state };
}

export default connect(mapStateToProps)(CompleteButton);
// latestMaxPullUps: currentMaxPullUps,
// latestAmrap: currentAmrap,
// latestScapHang: currentScapHang,