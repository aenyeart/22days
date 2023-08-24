import CompleteButton from '../CompleteButton.js';
import styles from '../../styles/styles'
import {Text} from "../Text.js";

export default ({ initialMaxPullUps, initialAmrap, finalMaxPullUps, finalAmrap }) => {
  const mtfDelta = finalMaxPullUps - initialMaxPullUps;
  const amrapDelta = finalAmrap - initialAmrap;
  return <>
    <Text style={styles.title}>
      FINAL REPORT{`\n`}
    </Text>
    <Text style={styles.h2}>
      {`\n`}
      Max-to-Failure Pull-Ups:{`\n`}
    </Text>
    <Text>
      Day 1: {initialMaxPullUps} reps{`\n`}
      Day 22: {finalMaxPullUps} reps{`\n`}
      Change to Max Pull-Ups: {mtfDelta} reps ({Math.round(100 * mtfDelta / initialMaxPullUps)}%){`\n`}
    </Text>
    <Text style={styles.h2}>
      {`\n`}
      5-minute AMRAP:{`\n`}
    </Text>
    <Text>
      Day 1: {initialAmrap} reps{`\n`}
      Day 21: {finalAmrap} reps{`\n`}
      Change to AMRAP: {amrapDelta} reps ({ Math.round(100 * amrapDelta / initialAmrap) }%) {`\n`}
    </Text >
    <CompleteButton
      title='Close Report'
      action={{ type: 'CLOSE_REPORT' }}
    />
    <Text>{`\n`}To begin a new 22-day cycle (preserves record of current & previous cycles):{`\n`}</Text>
    <CompleteButton
      title='New Cycle'
      action={{ type: 'START_NEW_CYCLE' }}
    />
  </>;
}
