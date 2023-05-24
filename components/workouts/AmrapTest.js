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

    <Input
      actionType="SET_LATEST_AMRAP"
      // created a new action/dispatch for this very specific case
      initialValue={latestAmrap}
    />
    <CompleteButton action={{type: "SET_FINAL_AMRAP"}} />
  </>;
}