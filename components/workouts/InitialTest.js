import { Text } from '../Text.js';
import Input from '../NumberInput.js';
import CompleteButton from '../CompleteButton.js';
import { useState, useRef, useEffect } from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Dimensions } from 'react-native';
import TimelineNode from '../TimelineNode.js';


export default ({ style, mtf, latestAmrap, today }) => {
  const [newMtf, setNewMtf] = useState(mtf);
  const [newAmrap, setNewAmrap] = useState(latestAmrap);
  const viewRef = useRef(null);

  useEffect(() => {
    // Ensure the view has been rendered before measuring
    if (viewRef.current) {
      viewRef.current.measure((x, y, width, height, pageX, pageY) => {
        // console.log('X coordinate:', x);
        // console.log('Y coordinate:', y);
        // console.log('Width:', width);
        // console.log('Height:', height);
        // console.log('Page X coordinate:', pageX);
        // console.log('Page Y coordinate:', pageY);
      });
    }
  }, []);

  return (
    <View style={style.outer}>
      {/* GREEN */}
      <View style={style.inner}>
        {/* PINK */}
        <View ref={viewRef}>
          <TimelineNode />
          <Text>
            Maximum consecutive pull-ups until failure (no breaks):
          </Text>
          <Input
            initialValue={mtf}
            handleChange={setNewMtf}
          />
        </View>
        <View ref={viewRef}>
          <TimelineNode />
          <Text>
            2-min rest
          </Text>
        </View>

        <View ref={viewRef}>
          <TimelineNode />
          <Text>Do pull-ups for AMRAP(i) in 5-min. {`\n`}Breaks allowed, but timer must not stop:</Text>
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
