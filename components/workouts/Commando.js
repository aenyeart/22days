import CompleteButton from '../CompleteButton.js';
import { Text } from "../Text.js";
import { View } from 'react-native';
import TimelineNode from "../TimelineNode";
import Timeline from "../Timeline";

export default ({ mtf, style }) => {
  return (
    <View style={style.outer}>
      {/* GREEN */}
      <View style={style.inner}>
        {/* PINK */}
        <View>
          <TimelineNode />
          <Timeline />
          <Text style={style.text}>
            Commando Pullups x {Math.floor(2 * mtf)} (2x current MTF)
          </Text>
        </View>

        <View>
          <TimelineNode />
          <Text style={style.text}>
            2 min rest
          </Text>
        </View>

        <View>
          <TimelineNode />
          <Text style={style.text}>
            Pullups x {Math.floor(1.5 * mtf)} (1.5x MTF)
          </Text>
        </View>
      </View>
      <CompleteButton action={null} />
    </View>

  );
}
