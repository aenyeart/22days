import {Text} from 'react-native';
import {useState} from 'react';
import InputEncapsulated from '../InputEncapsulated.js';
import CompleteButton from '../CompleteButton.js';

export default ({ mtf, scapHang }) => {
  const [newScapHang, setNewScapHang] = useState(scapHang);
  return <>
    <Text>
      Scap-Pull Hang
      {scapHang === null
        ? " until failure,"
        : ` for at least ${parseInt(scapHang) + 5} seconds \n\t(prev time +5 sec) OR until failure,`
      }
      {`\n`}2 min rest,
      {`\n`}Pull-ups x {Math.floor(1.6 * mtf)} (1.6x MTF)
    </Text>
    <Text>Scap-Pull Hang seconds:</Text>
    <InputEncapsulated
      placeholder="Enter scap-pull hang duration (seconds)"
      initialValue={newScapHang}
      handleChange={setNewScapHang}
    />
    <CompleteButton action=
    {{type:'SET_LATEST_SCAP_HANG', value: newScapHang}}
    />
  </>;
}
