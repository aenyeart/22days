import { Text } from './Text.js'

export default function WorkoutHeader({ today }) {
  const styles = {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
    width: '80%',
  };

  return (
    <Text style={styles}>
      Workout #{today}:
    </Text>
  );
}