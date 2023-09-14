import { useState } from 'react';
import InputEncapsulated from '../NumberInput.js';
import CompleteButton from '../CompleteButton.js';
import { Text } from "../Text.js";
import { View } from 'react-native';

export default ({ mtf, scapHang, style }) => {
  const [newScapHang, setNewScapHang] = useState(scapHang);
  return (
    <View style={style.outer}>
      {/* GREEN */}
      <View style={style.inner}>
        {/* PINK */}
        <View>
          <Text style={{marginBottom: 20}}>
            Scap-Pull Hang
            {scapHang === null
              ? " until failure,"
              : ` for at least ${parseInt(scapHang) + 5} seconds (prev time +5 sec) OR until failure:`
            }
          </Text>
          <InputEncapsulated
            placeholder="Enter scap-pull hang duration (seconds)"
            initialValue={newScapHang}
            handleChange={setNewScapHang}
          />
        </View>
        <Text>
          2 min rest
        </Text>
        <Text>
          Pull-ups x {Math.floor(1.6 * mtf)} (1.6x MTF)
        </Text>
      </View>
      <CompleteButton action=
        {{ type: 'SET_LATEST_SCAP_HANG', value: newScapHang }}
      />
    </View>
  );
}
