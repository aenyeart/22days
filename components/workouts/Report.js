import { Text } from "../Text.js";
import { View, ScrollView, StyleSheet } from 'react-native';
import { Divider } from "@rneui/themed";
import CompleteButton from '../CompleteButton.js';

export default ({ initialMaxPullUps, initialAmrap, finalMaxPullUps, finalAmrap, today }) => {

  const mtfDelta = finalMaxPullUps - initialMaxPullUps;
  const amrapDelta = finalAmrap - initialAmrap;

  const styles = StyleSheet.create({
    scrollviewStyles: {
      width: '100%',
      paddingHorizontal: '5%',
  // backgroundColor: 'rgba(255, 0, 255, .75)', // DEBUG ONLY
    },
    contentContainerStyles: {
      paddingTop: 20,
      flexGrow: 1,
    // backgroundColor: 'green', // DEBUG ONLY
    },
    headerStyles: {
      textAlign: 'center',
      alignSelf: 'center',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 20,
      width: '80%',
    },
    h2: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

  return (
    <>
      <ScrollView bounces={false} style={styles.scrollviewStyles} contentContainerStyle={styles.contentContainerStyles}>
        <Text style={styles.headerStyles}>
          Results Report:
        </Text>
        <Divider style={{ width: "100%", marginBottom: 20 }} />

        <View style={{ flexDirection: 'column', flex: 1 }}>
          <View >
            <Text style={styles.h2}>
              Max-to-Failure Pull-Ups:{`\n`}
            </Text>
            <Text>
              Day 1: {initialMaxPullUps || 0} reps{`\n`}
              Day 22: {finalMaxPullUps || 0} reps{`\n`}
              Change to Max Pull-Ups: {mtfDelta} reps ({Math.round(100 * mtfDelta / initialMaxPullUps) || 0}%){`\n`}
            </Text>
          </View>

          <View>
            <Text style={styles.h2}>
              {`\n`}
              5-minute AMRAP:{`\n`}
            </Text>
            <Text>
              Day 1: {initialAmrap || 0} reps{`\n`}
              Day 21: {finalAmrap || 0} reps{`\n`}
              Change to AMRAP: {amrapDelta} reps ({Math.round(100 * amrapDelta / initialAmrap) || 0}%) {`\n`}
            </Text >
          </View>
        </ View>

        <Divider style={{ width: '80%', paddingVertical: 20, alignSelf: "center" }} />

        <Text style={{ paddingVertical: 25, alignSelf: "center" }}>
          Want to continue the gains?
        </Text>

        <CompleteButton
          title='Start New 22-Day Cycle'
          action={{ type: 'START_NEW_CYCLE' }}
        />
      </ScrollView>
    </>
  );
}
