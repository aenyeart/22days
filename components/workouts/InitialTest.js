import {Text} from 'react-native';
import Input from '../Input.js';
import CompleteButton from '../CompleteButton.js';
import {SET_NEW_MTF} from "../../store/actions";

export default ({ mtf, latestAmrap, today }) => {
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
      placeholder="Enter your max pull-ups"
      actionType={SET_NEW_MTF}
      initialValue={mtf}
    />
    <Text>AMRAP pull-ups in five minutes:</Text>
    <Input
      placeholder="Enter your AMRAP"
      actionType="SET_CURRENT_AMRAP"
      initialValue={latestAmrap}
    />
    <CompleteButton action={today === 1 ? { type: 'SET_INITIAL_STATS'} : { type: 'COMPLETE_TEST' }} />
  </>;
}
