import {Text} from 'react-native';
import CompleteButton from '../CompleteButton.js';

export default ({mtf}) => {
  return <>
    <Text>Commando Pullups x {Math.floor(2 * mtf)} (2x current MTF), {`\n`}2 min rest, {`\n`}Pullups x {Math.floor(1.5 * mtf)} (1.5x MTF)</Text>
    <CompleteButton action={null} />
  </>;
}
