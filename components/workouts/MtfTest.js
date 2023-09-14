import { Text } from "../Text.js";
import Input from '../NumberInput.js';
import CompleteButton from '../CompleteButton.js';
import { useState } from "react";
import { View } from 'react-native';
import TimelineNode from '../TimelineNode.js';
import Timeline from '../Timeline.js';

export default ({ mtf, style }) => {
  const [newMtf, setNewMtf] = useState(mtf);

  return (
    <View style={style.outer}>
      {/* GREEN */}
      <View style={style.inner}>
        {/* PINK */}
        <View >
          <TimelineNode />
          <Timeline />
          <Text style={style.text}>Test – Update MTF pullups</Text>
          <Input
            initialValue={mtf}
            handleChange={setNewMtf}
          />
        </View>
      </View>
      <CompleteButton title='Finish & View Report' action={{ type: 'SAVE_RESULTS', value: newMtf }} />
    </View>
  );
}
