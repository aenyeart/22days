import { View } from 'react-native';
import { colors } from '../styles/styles.js';

export default function WorkoutWrapper({ children, getHeightForTimeline }) {
  const styles = {
    flexDirection: 'row',
    backgroundColor: colors[1],
    flex: '1 0 auto' // flex-grow: 1; flex-shrink: 0; flex-basis: auto;

  };

  return (
    <View style={styles} onLayout={getHeightForTimeline}>
      {children}
    </View>
  );
}
