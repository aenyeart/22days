import { Text } from 'react-native';
import Input from '../Input.js';

export default AmrapTest = () => {
  return <>
    <Text>Test – Do TDT from day one w/in 5 min</Text>
    <Input placeholder="Enter your 5-min AMRAP" actionType="SET_CURRENT_AMRAP" />
    {/* TODO render TDT, clarify instructions, consider omitting input? */}

  </>;
}
