import CompleteButton from '../CompleteButton.js';
import { Text } from "../Text.js";
import { View } from 'react-native';


export default ({ mtf, style }) => {
  return (
  <View style={style.outer}>
    {/* GREEN */}
    <View style={style.inner}>
      {/* PINK */}
      <Text>Chin-ups x {Math.floor(2 * mtf)} (2x current MTF), {`\n`}2 min rest, {`\n`}Pullups x {Math.floor(1.4 * mtf)} (1.4x MTF)</Text>

    </View>
    <CompleteButton action={null} />
  </View>
  );
}
// TODO change floor to round