import CompleteButton from '../CompleteButton.js';
import { Text } from "../Text.js";
import { View } from 'react-native';

export default ({ mtf, style }) => {
  return (
    <View style={style.outer}>
      {/* GREEN */}
      <View style={style.inner}>
        {/* PINK */}
        <Text>
          Commando Pullups x {Math.floor(2 * mtf)} (2x current MTF)
        </Text>
        <Text>
          2 min rest
        </Text>
        <Text>
          Pullups x {Math.floor(1.5 * mtf)} (1.5x MTF)
        </Text>
      </View>
      <CompleteButton action={null} />
    </View>

  );
}
