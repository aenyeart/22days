import { Text } from '../Text.js';
import Input from '../NumberInput.js';
import CompleteButton from '../CompleteButton.js';
import { useState } from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View } from 'react-native';

export default ({ mtf, latestAmrap, today }) => {
  const [newMtf, setNewMtf] = useState(mtf);
  const [newAmrap, setNewAmrap] = useState(latestAmrap);

  return (
    <View style={localStyles.outer}>
    {/* GREEN */}
        <View style={localStyles.inner}>
          {/* PINK */}
          <Text>
            Test –{`\n`}
            Max pull-ups until failure (MTF),{`\n`}
            2 min rest, {`\n`}
            5-min AMRAP{`\n`}
            {`\n`}
          </Text>
          <Text>Max consecutive pull-ups:</Text>
          <Input
            initialValue={mtf}
            handleChange={setNewMtf}
          />
          <Text>AMRAP pull-ups in five minutes:</Text>
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

const localStyles = {
  outer: {
    display: "flex",
    flex: '.8 0 auto',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(1, 128, 1, .75)',
  },
  inner: {
    display: 'flex',
    flex: '0 1 auto',
    height: '90%',
    width: '80%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'rgba(255, 0, 255, .75)',
  },
};