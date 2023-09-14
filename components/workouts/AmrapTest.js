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
    <View style={style.outer}>
      {/* GREEN */}
      <View style={style.inner}>
        {/* PINK */}
        <View>
          <TimelineNode />
          <Timeline />
          <Text>Test – Do AMRAP pull-ups in a 5-minute period. (Breaks allowed.){`\n`}
            {`\n`}
            Try to beat {tdt} reps, your total pull-ups from Day 1.{`\n`}
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
