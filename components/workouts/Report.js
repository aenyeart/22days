import { Button, Text } from 'react-native';
import CompleteButton from '../CompleteButton.js';
initialMaxPullUps, initialAmrap, finalMaxPullUps, finalAmrap
export default Report = ({ initialMaxPullUps, initialAmrap, finalMaxPullUps, finalAmrap }) => {
  const mtfDelta = finalMaxPullUps - initialMaxPullUps;
  const amrapDelta = initialAmrap - finalAmrap;
  return <>
    <Text>
      FINAL REPORT{`\n`}
      {`\n`}
      Max-to-Failure Pull-Ups: {`\n`}
      Day 1: {initialMaxPullUps} {`\n`}
      Day 22: {finalMaxPullUps} {`\n`}
      Change to Max Pull-Ups: {mtfDelta} ({mtfDelta / initialMaxPullUps}%){`\n`}
      {`\n`}
      5-minute AMRAP:
      Day 1: {initialAmrap} {`\n`}
      Day 22: {finalAmrap} {`\n`}
      Change to AMRAP: {amrapDelta} ({amrapDelta / initialAmrap}%) {`\n`}
    </Text>
    <Text>To begin a new 22-day cycle (preserves record of current & previous cycles):{`\n`}</Text>
    <Button>New Cycle</Button>
  </>;
}
// TODO Save deltas/results in store as own values
// TODO Add array to store. When completing a cycle/starting a new cycle, push current state into the array