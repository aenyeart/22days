import { Text } from 'react-native';
import Input from '../Input.js';
import CompleteButton from '../CompleteButton.js';

export default InitialTest = ({ mtf, latestAmrap }) => {
  return <>
    <Text>Test – Max pull-ups to failure (MTF){`\n`}2 min rest, {`\n`}5-min AMRAP,{`\n`}& Test Day Total (TDT)</Text>
    <Text>Max consecutive pull-ups:</Text>
    <Input
      placeholder="Enter your max pull-ups"
      actionType="SET_CURRENT_MAX_PULL_UPS"
      initialValue={mtf}
    />
    <Text>AMRAP pull-ups in five minutes:</Text>
    <Input
      placeholder="Enter your AMRAP"
      actionType="SET_CURRENT_AMRAP"
      initialValue={latestAmrap}
    />
    <CompleteButton action='COMPLETE_TEST' />

  </>;
}
