import { Text } from 'react-native';
import Input from '../Input.js';

export default ScapHang = ({mtf, scapHang}) => {
  console.log('latestScapHang as cmpt props >>>', scapHang);
  return <>
    <Text>Scap-Pull Hang until failure or prev time ({scapHang} s) plus additional 5 seconds: , {`\n`}2 min rest, {`\n`}Pullups x {Math.floor(1.6 * mtf)} (1.6x MTF)</Text>
    <Text>Scap-Pull Hang</Text>
    <Input placeholder="Enter scap-pull hang duration (seconds)" actionType="SET_CURRENT_SCAP_HANG" />
  </>;
}
