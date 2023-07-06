import React from 'react';
import {KeyboardAvoidingView, Pressable, ScrollView, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import styles from "../styles/styles.js";
import TodaysWorkout from './TodaysWorkout.js';
import {Text} from "./Text.js";
import {Icon} from "@rneui/themed";
import {LinearGradient} from "expo-linear-gradient";

function Today({ today, dispatch }) {
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#a0c4ff',
    },
    gradient: {
      width: 320,
      height: 60,
    },
  });
  return (
    <>

      {/*<LinearGradient*/}
      {/*  colors={['rgba(107, 97, 132, 1)', 'rgba(108, 128, 196, 1)']}*/}
      {/*  // colors={['white', 'black']}*/}
      {/*  start={{x: 0, y: 0}}*/}
      {/*  end={{x: 1, y: 0}}*/}
      {/*  // useAngle={true}*/}
      {/*  // angle={90}*/}
      {/*  // angleCenter={{x: 1, y: 0.5}}*/}
      {/*  // useAngle={false} angle={45} angleCenter={{x:0.5,y:0.5}}*/}
      {/*  elevation={0}*/}
      {/*  boxShadow={0}*/}
      {/*  style={{*/}
      {/*    elevation: 0,*/}
      {/*    width: '100%',*/}
      {/*    height: 100,*/}
      {/*    // borderBottomRightRadius: 43,*/}
      {/*    shadowRadius: 0,*/}
      {/*    shadowOpacity: 0,*/}
      {/*    borderBottomWidth: 0,*/}
      {/*    shadowColor: 'red',*/}
      {/*    shadowOffset: {*/}
      {/*      // height: 0,*/}
      {/*      // width: 0*/}
      {/*    }*/}
      {/*  }}*/}

      {/*  noShadow={true}*/}

      {/*></LinearGradient>*/}

      {/*<LinearGradient*/}
      {/*  // useAngle={true}*/}
      {/*  // angle={60}*/}
      {/*  // angleCenter={{x: 0.5, y: 0.5}}*/}
      {/*  // locations={[0.5, 0.8]} // Add locations, 0.5 = 50%*/}
      {/*  start={{x: 0, y: 0}}*/}
      {/*  end={{x: 1, y: 0}}*/}
      {/*  colors={['#FFF', '#000']}*/}
      {/*  // style={styles.gradient}*/}
      {/*/>*/}

      <View
        // colors={['rgba(72, 56, 103, 1)', 'rgba(61, 120, 234, 1)']}
        // useAngle={true}
        // angle={123}
        style={{
          width: '100%',
          opacity: 0.1,
          backgroundColor: '#FFFFFF',
          borderBottomRightRadius: 43,
          height: 100,
          position: 'absolute',
          top: 0,
        }}
        // style={styles.background}
      >
      </View>
        <Pressable type="outline"
                   style={{
                     width: '60%',
                     flexDirection: "row",
                     alignItems: "center",
                     opacity: 1,
                   }}
                   onPress={() => dispatch({type: 'DECREMENT'})}
        >
          <Icon name="back-in-time" type="entypo" color="white" size={24} style={{
            borderStyle: 'solid', borderRadius: 30, borderWidth: 1, borderColor: 'white', padding: 12,
            marginRight: 10,
          }} />
          <Text style={{fontWeight: "600"}}>Previous Workout</Text>
        </Pressable>

    <KeyboardAvoidingView behavior="padding" style={{ width: "100%" }}>
      <ScrollView contentContainerStyle={{ width: "100%" }}>
            <Text style={styles.title}>
              This is workout #{today}:
            </Text>
            <TodaysWorkout />
      </ScrollView>
    </KeyboardAvoidingView>

    </>
  );
}

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(Today);
