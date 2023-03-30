import {Text} from 'react-native';
import CompleteButton from '../CompleteButton.js';

export default ({tdt}) => {
  return <>
    <Text>Test – Do {tdt} pull-ups (your total from day one) within a 5-minute period.</Text>
    {/* TODO render TDT, clarify instructions */}
    <CompleteButton action={null} />
  </>;
}
