import { Text } from 'react-native';
import Input from '../Input.js';
import CompleteButton from '../CompleteButton.js';

export default AmrapTest = ({tdt}) => {
  return <>
    <Text>Test – Do AMRAP pull-ups in a 5-minute period. (Breaks allowed.){`\n`}
      {`\n`}
      Try to beat {tdt} reps, your total pull-ups from Day 1.{`\n`}
    </Text>
    <Input
      // placeholder={tdt}  // doesn't seem to render in counter
      actionType="SET_FINAL_AMRAP"
      initialValue={tdt}
    />
    <CompleteButton action={{ type: 'SET_FINAL_AMRAP' }} />
  </>;
}
