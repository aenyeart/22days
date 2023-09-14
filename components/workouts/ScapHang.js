import { useState } from 'react';
import Input from '../NumberInput.js';
import CompleteButton from '../CompleteButton.js';
import { Text } from "../Text.js";
import { View } from 'react-native';
import TimelineNode from "../TimelineNode";
import Timeline from "../Timeline";

export default ({ mtf, scapHang, style }) => {
  const [newScapHang, setNewScapHang] = useState(scapHang);

  return (
    <View style={style.outer}>
      {/* GREEN */}
      <View style={style.inner}>
        {/* PINK */}

        <View>
          <TimelineNode />
          <Timeline />
          <Text style={{ marginBottom: 20 }}>
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
          <Text>
            2 min rest
          </Text>
        </View>

        <View>
          <TimelineNode />
          <Text>
            Pull-ups x {Math.floor(1.6 * mtf)} (1.6x MTF)
          </Text>
        </View>

      </View>
      <CompleteButton action=
        {{ type: 'SET_LATEST_SCAP_HANG', value: newScapHang }}
      />
    </View>
  );
}
