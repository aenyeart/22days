import { Text } from 'react-native';
import CompleteButton from '../CompleteButton.js';
export default Report = ({ initialMaxPullUps, initialAmrap, finalMaxPullUps, finalAmrap }) => {
  const mtfDelta = finalMaxPullUps - initialMaxPullUps;
  const amrapDelta = finalAmrap - initialAmrap;
  return <>
    <Text>
      FINAL REPORT{`\n`}
      {`\n`}
      Max-to-Failure Pull-Ups: {`\n`}
      Day 1: {initialMaxPullUps} {`\n`}
      Day 22: {finalMaxPullUps} {`\n`}
      Change to Max Pull-Ups: {mtfDelta} ({100 * (mtfDelta / initialMaxPullUps)}%){`\n`}
      {`\n`}
      5-minute AMRAP:
      Day 1: {initialAmrap} {`\n`}
      Day 21: {finalAmrap} {`\n`}
      Change to AMRAP: {amrapDelta} ({100 * (amrapDelta / initialAmrap)}%) {`\n`}
    </Text>
    <CompleteButton
      title='Close Report'
      action={{ type: 'CLOSE_REPORT' }}
    ></CompleteButton>
    <Text>{`\n`}To begin a new 22-day cycle (preserves record of current & previous cycles):{`\n`}</Text>
    <CompleteButton
      title='New Cycle'
      action={{ type: 'START_NEW_CYCLE' }}
    ></CompleteButton>
  </>;
}
