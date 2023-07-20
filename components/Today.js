import React from 'react';
import { KeyboardAvoidingView, Pressable, ScrollView, StyleSheet, View, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import styles from "../styles/styles.js";
import TodaysWorkout from './TodaysWorkout.js';
import { Text } from "./Text.js";
import { Icon } from "@rneui/themed";


function Today({ today, dispatch }) {

  const { height, width } = Dimensions.get('window');
  const localStyles = StyleSheet.create({
    outer: {
      display: "flex",
      width: "100%",
      alignItems: 'center',
      marginTop: .05 * height,
    },
    inner: {
      // flex: 1,
      marginHorizontal: 'auto',
      width: "80%",
    },
  });

  return (
    <>
      <View style={{
        width: '100%',
        opacity: 0.3,
        backgroundColor: '#FFFFFF',
        borderBottomRightRadius: 35,
        // height: 100,
        paddingRight: 3,
        height: .15 * height,
        position: 'absolute',
        top: 0,
        right: 0,
      }} />

      <View style={{
        height: .07 * height,
        width: '100%',
        flexDirection: "row",
        // alignItems: "center",
        justifyContent: 'flex-start',
        marginLeft: "10%",
        // paddingBottom: 10,
      }}>
        <Pressable type="outline"
          style={{
            width: '60%',
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => dispatch({ type: 'DECREMENT' })}
        >
          <Icon name="back-in-time" type="entypo" color="white" size={24} style={{
            borderStyle: 'solid',
            borderRadius: '100%',
            borderWidth: 1,
            borderColor: 'rgba(255, 255, 255, .5)',
            padding: 12,
            marginRight: 10,
          }} />
          <Text style={{ fontWeight: "600" }}>Previous Workout</Text>
        </Pressable>
      </View>
      {/* <KeyboardAvoidingView behavior="padding" style={localStyles.cincher}> */}

      <View style={localStyles.outer}>
        <View style={localStyles.inner}>
          {/* <ScrollView contentContainerStyle={{width: "100%"}}> */}
          <Text style={styles.title}>
            This is workout #{today}:
          </Text>
          <TodaysWorkout />
        </View>
        {/* </ScrollView> */}
      </View>
      {/* </KeyboardAvoidingView> */}
    </>
  );
}


function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(Today);
