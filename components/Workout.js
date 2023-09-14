import {connect} from 'react-redux';
import ScapHang from './workouts/ScapHang.js';
import Commando from './workouts/Commando.js';
import AmrapTest from './workouts/AmrapTest.js';
import MtfTest from './workouts/MtfTest.js';
import InitialTest from './workouts/InitialTest.js';
import ChinUps from './workouts/ChinUps.js';
import workoutAssigner from "../constants/workoutAssigner.js";
import {Text} from "./Text.js";
// TODO: Ascertain whether this can be utilized again / imported into Today.js instead of all this logic living in Today.js

function Workout({ today, latestMaxPullUps, latestAmrap, latestScapHang, testDayTotal}) {
  const workout = workoutAssigner(today);

  switch (workout) {
    case "mtfTest":
      return <MtfTest mtf={latestMaxPullUps} />;
    case "amrapTest":
      return <AmrapTest tdt={testDayTotal} latestAmrap={latestAmrap}/>;
    case "scapHang":
      return <ScapHang mtf={latestMaxPullUps} scapHang={latestScapHang} />;
    case "chinUps":
      return <ChinUps mtf={latestMaxPullUps} />
    case "commando":
      return <Commando mtf={latestMaxPullUps} />;
    case "initialTest":
      return <InitialTest mtf={latestMaxPullUps} latestAmrap={latestAmrap} today={today} />;
    default:
      return <Text>~~~ Hmmmmmm..... ~~~</Text>
  };
}
function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(Workout);
