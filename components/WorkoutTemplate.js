import { ScrollView, StyleSheet } from 'react-native';
import { Divider } from '@rneui/themed';

import CompleteButton from './CompleteButton.js';
import Timeline from './Timeline.js';
import WorkoutHeader from './WorkoutHeader.js';
import WorkoutWrapper from './WorkoutWrapper.js';
import StepList from './StepList.js';

export default ({ today, children, action }) => {

  const scrollviewStyles = StyleSheet.create({
    width: '100%',
    paddingHorizontal: '5%',
    // backgroundColor: 'rgba(255, 0, 255, .75)', // DEBUG ONLY
  });

  const contentContainerStyles = StyleSheet.create({
    paddingTop: 20,
    // flex: '1 0 auto',
    flexGrow: 1, // THIS IS THE ONE THAT WORKS
    // backgroundColor: 'green', // DEBUG ONLY

  });
  return (
    <>
      <ScrollView
        bounces='false' // defaults to true
        style={scrollviewStyles}
        contentContainerStyle={contentContainerStyles}
        scrollEventThrottle={2}>

        <WorkoutHeader today={today} />

        <Divider style={{ width: '100%', marginBottom: 20 }} />

        <WorkoutWrapper>

          <Timeline />

          <StepList>
            {children}
          </StepList>

        </WorkoutWrapper>

        <CompleteButton action={action} />
      </ScrollView>
    </>
  );
}
