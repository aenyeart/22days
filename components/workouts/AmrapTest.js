import {Text} from 'react-native';
import CompleteButton from '../CompleteButton.js';
import Input from '../Input.js';
import { SET_NEW_AMRAP } from '../../store/actions.js';

export default ({ tdt, latestAmrap }) => {
  return <>
    <Text>Test – Do AMRAP pull-ups in a 5-minute period. (Breaks allowed.){`\n`}
      {`\n`}
      Try to beat {tdt} reps, your total pull-ups from Day 1.{`\n`}
    </Text>

    {/* TODO Idea: Add callback function for Input onChange that passes a value for the CompleteButton to use. */}
    <Input
      actionType={{ type: "SET_FINAL_AMRAP" }}
      initialValue={latestAmrap}
    />
    <CompleteButton action={{type: "SET_FINAL_AMRAP"}} />
  </>;
}
/*
case 'TEST_DAYS':
case 'CLOSE_REPORT':
case 'INCREMENT':
case 'DECREMENT':
case 'SET_INITIAL_STATS':
case SET_NEW_MTF:
case SET_NEW_AMRAP:
case 'SET_FINAL_MAX_PULL_UPS':
case 'SET_FINAL_AMRAP':
case 'SET_CURRENT_SCAP_HANG':
case 'SET_TEST_DAY_TOTAL':
case 'SET_LATEST_SCAP_HANG':
case 'COMPLETE_TEST':
case 'START_NEW_CYCLE':
case 'SAVE_RESULTS':
case PURGE:
*/
