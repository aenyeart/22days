import React, {useEffect, useState} from 'react';
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import {Icon} from "@rneui/themed";

const CountdownTimer = (props) => {
  const [timeRemaining, setTimeRemaining] = useState(props.seconds);
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeRemaining(props.seconds);
  }

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setTimeRemaining(prevTime => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    if (timeRemaining === 0) {
      setIsRunning(false);
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning, timeRemaining]);

  useEffect(() => {
    if (timeRemaining === 0) {
      // Timer has completed, you can add your logic here
    }
  }, [timeRemaining]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const [pressIn, setPressIn] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => !isRunning && resetTimer()}
       style={[
         styles.pressable,
         styles.pressableLeft,
         isRunning && {opacity: 0.5},
         !isRunning && pressIn && {opacity: 1, backgroundColor: "black"}
       ]}
       onPressIn={() => { setPressIn(true) }}
       onPressOut={() => { setPressIn(false) }}
      >
        <Icon
          name={'reload-outline'}
          type='ionicon'
          color="#FFF"
          style={{ transform: [{ scaleX: -1 }] }}
        />
      </Pressable>

      <Text style={styles.timerText}>{formatTime(timeRemaining)}</Text>

      <Pressable onPress={!isRunning ? startTimer : pauseTimer} style={[styles.pressable, styles.pressableRight]}>
        <Icon
          name={isRunning ? 'pause-outline' : 'play-outline'}
          type='ionicon'
          color="#FFF"
          />
      </Pressable>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: .8 * width,
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 15,
    padding: 8,
    borderRadius: 40,
  },
  timerText: {
    fontSize: 28,
  },
  pressable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    width: 50,
    height: 50,
    borderRadius: 999,
  },
  pressableLeft: {
    backgroundColor: '#FF9595'
  },
  pressableRight: {
    backgroundColor: '#3FE180'
  },
});

export default CountdownTimer;
