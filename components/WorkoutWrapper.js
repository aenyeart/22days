import { View } from 'react-native';
import { colors } from '../styles/styles.js';

export default function WorkoutWrapper({ children, getHeightForTimeline }) {
  const styles = {
    flexDirection: 'row',
    backgroundColor: colors[1],
  };

  return (
    <View style={styles} onLayout={getHeightForTimeline}>
      {children}
    </View>
  );
}