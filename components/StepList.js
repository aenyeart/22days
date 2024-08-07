import { View } from 'react-native';

export default function StepList({ children }) {
  const styles = {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'red',
  };
  console.log('inside StepList'); // This fires every time a child changes. Room to optimize?
  return (
    <View style={styles}>
      {children}
    </View>
  );
}