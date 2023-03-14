import { Text } from 'react-native';
import Input from '../Input.js';

export default MtfTest = () => {
  return <>
    <Text>Test – Update MTF pullups</Text>
    <Input placeholder="Enter your max pull-ups" actionType="SET_CURRENT_MAX_PULL_UPS" />
  </>;
}
