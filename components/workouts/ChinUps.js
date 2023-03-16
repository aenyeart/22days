import { Text } from 'react-native';
import CompleteButton from '../CompleteButton.js';
export default ChinUps = ({mtf}) => {
  return <>
    <Text>Chin-ups x {Math.floor(2 * mtf)} (2x current MTF), {`\n`}2 min rest, {`\n`}Pullups x {Math.floor(1.4 * mtf)} (1.4x MTF)</Text>
    <CompleteButton value={null} />

  </>;
}
