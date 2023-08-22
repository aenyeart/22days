import { Text } from "../Text.js";
import Input from '../NumberInput.js';
import CompleteButton from '../CompleteButton.js';
import { useState } from "react";
import { View } from 'react-native';

export default ({ mtf, style }) => {
  const [newMtf, setNewMtf] = useState(mtf);

  return (
    <View style={style.outer}>
      {/* GREEN */}
      <View style={style.inner}>
        {/* PINK */}
        <Text>Test – Update MTF pullups</Text>
        <Input
          initialValue={mtf}
          handleChange={setNewMtf}
        />
      </View>
      <CompleteButton title='Finish & View Report' action={{ type: 'SAVE_RESULTS', value: newMtf }} />
    </View>
  );
}
