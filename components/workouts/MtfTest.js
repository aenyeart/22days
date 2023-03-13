import { Text } from 'react-native';
import Input from '../Input.js';

export default MtfTest = () => {
  return <>
    <Text>Test – Update MTF pullups</Text>
    <Input placeholder="Enter scap-pull hang duration (seconds)" actionType="SET_CURRENT_SCAP_HANG" />
  </>;
}
