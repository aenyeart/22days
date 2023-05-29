import {Text} from 'react-native';
import Input from '../NumberInput.js';
import CompleteButton from '../CompleteButton.js';
import {useState} from "react";

export default ({ mtf, latestAmrap, today }) => {
  const [newMtf, setNewMtf] = useState(mtf);
  const [newAmrap, setNewAmrap] = useState(latestAmrap);

  return <>
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
    <CompleteButton action={today === 1
      ? { type: 'SET_INITIAL_STATS', value: {newMtf, newAmrap} }
      : { type: 'COMPLETE_TEST', value: {newMtf, newAmrap} }
    } />
  </>;
}
