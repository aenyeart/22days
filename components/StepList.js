import { View } from 'react-native';

export default function StepList({ children }) {
  const styles = {
    flexDirection: 'column',
    alignContent: 'space-between',  // BUG: Is this doing anything to the layout at all?
  };
  console.log('inside StepList');
  return (
    <View style={styles}>
      {children}
    </View>
  );
}