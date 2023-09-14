import CompleteButton from '../CompleteButton.js';
import Input from '../NumberInput.js';
import { useState } from "react";
import { Text } from '../Text.js';
import { View } from "react-native";
import TimelineNode from "../TimelineNode";
import Timeline from "../Timeline";

export default ({ tdt, latestAmrap, style }) => {
  const [newAmrap, setNewAmrap] = useState(latestAmrap);

  return (
    // BUG: Final Report is triggered by tapping somewhere outside the complete button
    <View style={style.outer}>
      {/* GREEN */}
      <View style={style.inner}>
        {/* PINK */}
        <View>
          <TimelineNode />
          <Timeline />
          <Text style={style.text}>Test – Do pull-ups for AMRAP(i) within a 5-min period:
            {`\n`}– Breaks are allowed, but the timer must not stop.
            {`\n`}– Try to beat {tdt} reps, your total pull-ups from Day 1.
          </Text>

          <Input
            initialValue={newAmrap}
            handleChange={setNewAmrap}
          />
        </View>
      </View>
      <CompleteButton action={{ type: "SET_FINAL_AMRAP", value: newAmrap }} />
    </View>
  );
}
