import {Text} from 'react-native';
import Input from '../Input.js';
import CompleteButton from '../CompleteButton.js';

export default ({ mtf, scapHang }) => {
  return <>
    <Text>
      {/* Scap-Pull Hang x {parseInt(scapHang) + 5} seconds {`\n\t`}(prev time +5 sec), OR until failure, */}
      Scap-Pull Hang
      {scapHang === null
        ? " until failure,"
        : ` for at least ${parseInt(scapHang) + 5} seconds \n\t(prev time +5 sec) OR until failure,`
      }
      {`\n`}2 min rest,
      {`\n`}Pull-ups x {Math.floor(1.6 * mtf)} (1.6x MTF)
    </Text>
    <Text>Scap-Pull Hang seconds:</Text>
    <Input
      placeholder="Enter scap-pull hang duration (seconds)"
      actionType="SET_CURRENT_SCAP_HANG"
      initialValue={scapHang}
    />
    <CompleteButton action={{type:'SET_LATEST_SCAP_HANG'}} />
  </>;
}
