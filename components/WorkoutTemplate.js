import { useState } from 'react';
import { View, ScrollView } from 'react-native';

import CompleteButton from './CompleteButton.js';
import CountdownTimer from './CountdownTimer.js';
import { Divider } from '@rneui/themed';
import Input from './NumberInput.js';
import styles, { screen, colors } from '../styles/styles.js';
import { Text } from './Text.js';
import Timeline from './Timeline.js';
import TimelineBottom from './TimelineBottom.js';
import WorkoutHeader from './WorkoutHeader.js';
import WorkoutStep from './WorkoutStep.js';
import WorkoutWrapper from './WorkoutWrapper.js';
import StepList from './StepList.js';

export default ({ ...props }) => {
  // TODO IMPORT CONSTANTS FOR STATE OF EACH WORKOUT? TODO
  // const [newMtf, setNewMtf] = useState(mtf);

  const [timelineHeight, setTimelineHeight] = useState(0);
  const getHeightForTimeline = (event) => {
    let { y } = event.nativeEvent.layout;
    console.log('InitialTest height check', y);
    setTimelineHeight(y);
  }
  const handleScroll = (e) => {
    console.log('onScroll', e.nativeEvent.contentOffset.y);
    setTimelineHeight(timelineHeight + e.nativeEvent.contentOffset.y);
    // dispatch({ type: 'SET_TIMELINE_SCROLL', value: e.nativeEvent.contentOffset.x });
  }
  const scrollviewStyles = {
    display: 'flex',
    paddingTop: 20,
    paddingBottom: .5 * screen.height,
    width: .9 * screen.width,
    // backgroundColor: 'rgba(255, 0, 255, .75)', // DEBUG ONLY
  };

  return (
    <>
      <ScrollView
        bounces='true'
        style={scrollviewStyles}
        onScroll={handleScroll}
        scrollEventThrottle={2}>

        <WorkoutHeader today={props.today} />

        <Divider style={{ width: '100%', marginBottom: 20 }} />

        <WorkoutWrapper onLayout={getHeightForTimeline}>

          <Timeline />
          {/* <Timeline style={{ height: timelineHeight }} /> */}

          <StepList>
            {steps.map(step => <WorkoutStep>{step}</WorkoutStep>)}
          </StepList>

        </WorkoutWrapper>

      </ScrollView>

      <TimelineBottom />

      <CompleteButton action={props.action} />
    </>
  );
}
