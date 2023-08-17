import React from 'react';
import {
  Pressable,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import styles from "../styles/styles.js";
import Workout from './Workout.js';
import { Text } from "./Text.js";
import { Icon } from "@rneui/themed";
import {Header} from "@rneui/base";


function Today({ today, dispatch }) {

  return (
    <>
      <Header
      // TODO: Extract styles to localStyles object below
        containerStyle={{
          paddingHorizontal: "10%",
          borderBottomWidth: 0,
          borderBottomRightRadius: 35,
          backgroundColor: "rgba(255, 255, 255, .3)",
        }}

        placement={'left'}
        leftContainerStyle={{flex: 0, width: 0}}
        rightContainerStyle={{flex: 0, width: 0}}

        centerContainerStyle={{paddingHorizontal: 0}}
        centerComponent={
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
        }
      />

      <View style={localStyles.outer}>
        <View style={localStyles.inner}>
          <Text style={styles.title}>
            This is workout #{today}:
          </Text>
          <Workout />
        </View>
      </View>
    </>
  );
}

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(Today);


const { height, width } = Dimensions.get('window');
const localStyles = StyleSheet.create({
  outer: {
    display: "flex",
    width: "100%",
    alignItems: 'center',
    marginTop: .05 * height,
  },
  inner: {
    // NOTE: not changing anything
    // marginHorizontal: 'auto',
    width: "80%",
    // backgroundColor: "red" // DEBUG ONLY
  },
});
