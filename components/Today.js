import React from 'react';
import {KeyboardAvoidingView, Pressable, ScrollView, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import TodaysWorkout from './TodaysWorkout.js';
import {Text} from "./Text.js";
import {Icon} from "@rneui/themed";

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
      <View style={{
        width: '100%',
        opacity: 0.3,
        backgroundColor: '#FFFFFF',
        borderBottomRightRadius: 35,
        height: 100,
        position: 'absolute',
        top: 0,
      }}/>

      <View style={{
        height: 80,
        width: '100%',
        flexDirection: "row",
        alignItems: "flex-end",
        paddingBottom: 10,
        paddingLeft: 20,
      }}>
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
      </View>

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
