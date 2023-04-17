import {Text} from 'react-native';
import Input from '../Input.js';
import CompleteButton from '../CompleteButton.js';
export default ({mtf}) => {
  return <>
    <Text>Test – Update MTF pullups</Text>
    <Input
      placeholder="Enter your max pull-ups"
      actionType="SET_FINAL_MAX_PULL_UPS"
      initialValue={mtf}
    />
    <CompleteButton title='Finish & View Report' action={{ type: 'SAVE_RESULTS' }} />
  </>;
}
