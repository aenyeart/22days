import { Text } from 'react-native';
import Input from '../Input.js';
import CompleteButton from '../CompleteButton.js';

export default AmrapTest = ({tdt}) => {
  return <>
    <Text>Test – Do {tdt} pull-ups (your total from day one) within a 5-minute period.</Text>
    {/* TODO render TDT, clarify instructions */}
    <CompleteButton action={null} />
  </>;
}
