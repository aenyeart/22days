import React, { useEffect, useState } from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import { Icon } from "@rneui/themed";
import * as Notifications from "expo-notifications";

const Stopwatch = (props) => {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
    props.setNewScapHang(timeElapsed);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeElapsed(0);
  }

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setTimeElapsed(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

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
          isRunning && { opacity: 0.5 },
          !isRunning && pressIn && { opacity: 1, backgroundColor: "black" }
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

      <Text style={styles.timerText}>{formatTime(timeElapsed)}</Text>

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
// TODO Can I delete this leftover code?
// const triggerNotification = async (body) => {
//   await Notifications.scheduleNotificationAsync({
//     content: {
//       title: "Time's Up!",
//       body: body,
//       data: { data: "goes here" },
//     },
//     trigger: null,
//   });
// }

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: .75 * width,
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

export default Stopwatch;
