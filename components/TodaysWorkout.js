import { connect } from 'react-redux';
import { Text } from 'react-native'
import ScapHang from './workouts/ScapHang.js';
import Commando from './workouts/Commando.js';
import AmrapTest from './workouts/AmrapTest.js';
import MtfTest from './workouts/MtfTest.js';
import InitialTest from './workouts/InitialTest.js';
import ChinUps from './workouts/ChinUps.js';
import workoutAssigner from "../constants/workoutAssigner";

function TodaysWorkout({ today, latestMaxPullUps, currentMaxPullUps, latestAmrap, currentAmrap, latestScapHang, currentScapHang, dispatch }) {
  // function TodaysWorkout({ ...props }) {
  const workout = workoutAssigner(today);

  console.log('workout >>>', workout);
  console.log('latestScapHang  >>>', latestScapHang);
  switch (workout) {
    case "mtfTest":
      return <MtfTest mtf={currentMaxPullUps} />;
    case "amrapTest":
      return <AmrapTest tdt={testDayTotal} />;
    case "scapHang":
      return <ScapHang mtf={currentMaxPullUps} scapHang={latestScapHang} />;
    case "chinUps":
      return <ChinUps mtf={currentMaxPullUps} />
    case "commando":
      return <Commando mtf={currentMaxPullUps} />;
    case "initialTest":
      return <InitialTest mtf={currentMaxPullUps} />;
    default:
      // return;
      return <Text>~~~ Hmmmmmm..... ~~~</Text>
  };
}
function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(TodaysWorkout);
