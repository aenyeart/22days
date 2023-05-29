import {Text} from 'react-native';
import Input from '../NumberInput.js';
import CompleteButton from '../CompleteButton.js';
import {useState} from "react";

export default ({mtf}) => {
  const [newMtf, setNewMtf] = useState(mtf);

  return <>
    <Text>Test – Update MTF pullups</Text>
    <Input
      initialValue={mtf}
      handleChange={setNewMtf}
    />
    <CompleteButton title='Finish & View Report' action={{ type: 'SAVE_RESULTS', value: newMtf }} />
  </>;
}
