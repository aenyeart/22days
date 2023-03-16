import { Text } from 'react-native';
import Input from '../Input.js';
import CompleteButton from '../CompleteButton.js';

export default AmrapTest = ({tdt}) => {
  return <>
    <Text>Test – Do {tdt} pull-ups (your total from day one) or AMRAP within a 5-minute period.</Text>
    <Input placeholder="Enter your 5-min AMRAP" actionType="SET_CURRENT_AMRAP" />
    {/* TODO render TDT, clarify instructions, consider omitting input? */}

  </>;
}
