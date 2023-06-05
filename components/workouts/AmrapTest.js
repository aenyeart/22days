import CompleteButton from '../CompleteButton.js';
import Input from '../NumberInput.js';
import {useState} from "react";
import { Text } from '../Text.js';


export default ({ tdt, latestAmrap }) => {
  const [newAmrap, setNewAmrap] = useState(latestAmrap);

  return <>
    <Text>Test – Do AMRAP pull-ups in a 5-minute period. (Breaks allowed.){`\n`}
      {`\n`}
      Try to beat {tdt} reps, your total pull-ups from Day 1.{`\n`}
    </Text>

    <Input
      initialValue={newAmrap}
      handleChange={setNewAmrap}
    />
    <CompleteButton action={{type: "SET_FINAL_AMRAP", value: newAmrap}} />
  </>;
}
