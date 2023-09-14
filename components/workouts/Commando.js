import CompleteButton from '../CompleteButton.js';
import { Text } from "../Text.js";
import { View } from 'react-native';
import TimelineNode from "../TimelineNode";
import Timeline from "../Timeline";
import {useRef} from "react";

export default ({ mtf, style }) => {
  const viewRef = useRef(null);

  return (
    <View style={style.outer}>
      {/* GREEN */}
      <View style={style.inner}>
        {/* PINK */}

        <View ref={viewRef}>
        <TimelineNode />
        <Timeline />
        <Text>
          Commando Pullups x {Math.floor(2 * mtf)} (2x current MTF)
        </Text>
        </View>

        <View ref={viewRef}>
        <TimelineNode />
        <Timeline />
        <Text>
          2 min rest
        </Text>
        </View>

        <View ref={viewRef}>
        <TimelineNode />
        <Timeline />
        <Text>
          Pullups x {Math.floor(1.5 * mtf)} (1.5x MTF)
        </Text>
        </View>
      </View>
      <CompleteButton action={null} />
    </View>

  );
}
