import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { Icon } from "@rneui/themed";

const CountdownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState(120); // 2 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);

  // Function to start the timer
  const startTimer = () => {
    setIsRunning(true);
  };

  // Function to pause the timer
  const pauseTimer = () => {
    setIsRunning(false);
  };

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

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{formatTime(timeRemaining)}</Text>
      {!isRunning ? (
        <Button title="Start" onPress={startTimer} />
      ) : (
        <Button title="Pause" onPress={pauseTimer} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 48,
  },
});

export default CountdownTimer;
