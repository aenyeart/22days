import { Text } from '../Text.js';
import Input from '../NumberInput.js';
import CompleteButton from '../CompleteButton.js';
import { useState } from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View } from 'react-native';

export default ({ style, mtf, latestAmrap, today }) => {
  const [newMtf, setNewMtf] = useState(mtf);
  const [newAmrap, setNewAmrap] = useState(latestAmrap);

  return (
    <View style={style.outer}>
      {/* GREEN */}
      <View style={style.inner}>
        {/* PINK */}
        <Text>
          Maximum consecutive pull-ups until failure (no breaks):
        </Text>
        <Input
          initialValue={mtf}
          handleChange={setNewMtf}
        />
        <Text>
          2-min rest
        </Text>
        <Text>Do pull-ups for AMRAP(i) in 5-min. {`\n`}Breaks allowed, but timer must not stop:</Text>
        <Input
          initialValue={latestAmrap}
          handleChange={setNewAmrap}
        />
      </View>

      <CompleteButton action={today === 1
        ? { type: 'SET_INITIAL_STATS', value: { newMtf, newAmrap } }
        : { type: 'COMPLETE_TEST', value: { newMtf, newAmrap } }
      } />
    </View>
  );
}
