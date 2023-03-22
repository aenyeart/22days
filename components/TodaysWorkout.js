import {connect} from 'react-redux';
import {Text} from 'react-native'
import ScapHang from './workouts/ScapHang.js';
import Commando from './workouts/Commando.js';
import AmrapTest from './workouts/AmrapTest.js';
import MtfTest from './workouts/MtfTest.js';
import InitialTest from './workouts/InitialTest.js';
import ChinUps from './workouts/ChinUps.js';
import workoutAssigner from "../constants/workoutAssigner";

function TodaysWorkout({ today, latestMaxPullUps, currentMaxPullUps, latestAmrap, currentAmrap, latestScapHang, currentScapHang, testDayTotal, dispatch }) {
  const workout = workoutAssigner(today);

  switch (workout) {
    case "mtfTest":
      return <MtfTest mtf={latestMaxPullUps} />;
    case "amrapTest":
      return <AmrapTest tdt={testDayTotal} />;
    case "scapHang":
      return <ScapHang mtf={latestMaxPullUps} scapHang={latestScapHang} />;
    case "chinUps":
      return <ChinUps mtf={latestMaxPullUps} />
    case "commando":
      return <Commando mtf={latestMaxPullUps} />;
    case "initialTest":
      return <InitialTest mtf={latestMaxPullUps} latestAmrap={latestAmrap} />;
    default:
      return <Text>~~~ Hmmmmmm..... ~~~</Text>
  };
}
function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(TodaysWorkout);
