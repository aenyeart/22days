import { Text } from './Text.js'
import { StyleSheet } from 'react-native';

export default function WorkoutHeader({ today }) {
  const headerStyles = StyleSheet.create({
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
    width: '80%',
  });

  return (
    <Text style={headerStyles}>
      Workout #{today}:
    </Text>
  );
}