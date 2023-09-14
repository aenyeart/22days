import { Text } from '../Text.js';
import Input from '../NumberInput.js';
import CompleteButton from '../CompleteButton.js';
import { useState } from "react";
import { View } from 'react-native';
import TimelineNode from '../TimelineNode.js';
import Timeline from '../Timeline.js';


export default ({ style, mtf, latestAmrap, today }) => {
  const [newMtf, setNewMtf] = useState(mtf);
  const [newAmrap, setNewAmrap] = useState(latestAmrap);

  return (
    <View style={style.outer}>
      {/* GREEN */}
      <View style={style.inner}>
        {/* PINK */}
        <View>
          <TimelineNode />
          <Timeline />
          <Text style={style.text}>
            Maximum consecutive pull-ups until failure (no breaks):
          </Text>
          <Input
            initialValue={mtf}
            handleChange={setNewMtf}
          />
        </View>
        <View>
          <TimelineNode />
          <Text style={style.text}>
            2-min rest
          </Text>
        </View>

        <View>
          <TimelineNode />
          <Text style={style.text}>
            Do pull-ups for AMRAP(i) in 5-min. {`\n`}Breaks allowed, but timer must not stop:
          </Text>
          <Input
            initialValue={latestAmrap}
            handleChange={setNewAmrap}
          />
        </View>
      </View>

      <CompleteButton action={today === 1
        ? { type: 'SET_INITIAL_STATS', value: { newMtf, newAmrap } }
        : { type: 'COMPLETE_TEST', value: { newMtf, newAmrap } }
      } />
    </View>
  );
}
