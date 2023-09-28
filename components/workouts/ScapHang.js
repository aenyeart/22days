import { useState } from 'react';
import Input from '../NumberInput.js';
import CompleteButton from '../CompleteButton.js';
import { Text } from "../Text.js";
import { View } from 'react-native';
import TimelineNode from "../TimelineNode";
import Timeline from "../Timeline";
import styles  from "../../styles/styles.js";

export default ({ mtf, scapHang, style }) => {
  const [newScapHang, setNewScapHang] = useState(scapHang);
  const workoutStyles = styles.workoutStyles;

  return (
    <>
      {/* GREEN */}
      <View style={workoutStyles.inner}>
        {/* PINK */}

        <View>
          <TimelineNode />
          <Timeline />
          <Text style={workoutStyles.text}>
            {/* <Text style={{ marginBottom: 20 }}> */}

            Scap-Pull Hang for time
            {scapHang === null
              ? " until failure (seconds):"
              : ` for at least ${parseInt(scapHang) + 5} seconds (prev time +5 sec) OR until failure:`
            }
          </Text>
          <Input
            placeholder="Enter scap-pull hang duration (seconds)"
            initialValue={newScapHang}
            handleChange={setNewScapHang}
          />
        </View>

        <View>
          <TimelineNode />
          <Text style={workoutStyles.text}>
            2 min rest
          </Text>
        </View>

        <View>
          <TimelineNode />
          <Text style={workoutStyles.text}>
            Pull-ups x {Math.floor(1.6 * mtf)} (1.6x MTF)
          </Text>
        </View>

      </View>
      <CompleteButton action=
        {{ type: 'SET_LATEST_SCAP_HANG', value: newScapHang }}
      />
    </>
  );
}
