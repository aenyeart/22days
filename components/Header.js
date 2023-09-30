import { useState } from "react";
import { Header } from "@rneui/themed";
import { View, Pressable } from "react-native";
import { Icon } from "@rneui/themed";
import { connect } from "react-redux";
import { Text } from "./Text";

function Previous({ dispatch, renderReport }) {
  const handlePress = () => {
    renderReport ? dispatch({ type: 'CLOSE_REPORT' }) : dispatch({ type: 'DECREMENT' })
  }
  const [pressIn, setPressIn] = useState(false);

  return (
    <Header
      containerStyle={ pressIn
        ? { borderBottomWidth: 0, borderBottomRightRadius: 35, backgroundColor: "rgba(255, 255, 255, .1)" }
        : { borderBottomWidth: 0, borderBottomRightRadius: 35, backgroundColor: "rgba(255, 255, 255, .3)" }
      }
      centerComponent={
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 5,
            alignItems: 'center',
          }}>
          <Pressable
            onPressIn={() => { setPressIn(true) }}
            onPressOut={() => { setPressIn(false) }}
            onPress={() => handlePress()}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} // Increase hitSlop
            style={{
              position: 'absolute',
              left: -50,
              padding: 11
            }}>
            <Icon name="chevron-left" color="white" />
          </Pressable>
          <Pressable
            onPressIn={() => { setPressIn(true) }}
            onPressOut={() => { setPressIn(false) }}
            onPress={() => handlePress()}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 30 }} // Increase hitSlop
          >
            <Text style={{
              fontWeight: "600",
              fontSize: 20,
              paddingVertical: 11,
            }}>
              { renderReport ? 'Close Report' : 'Previous Workout' }
            </Text>
          </Pressable>
        </View>
      } // End centerComponent
    />
  )
}

function mapStateToProps(state) {
  return {...state};
}

export default connect(mapStateToProps)(Previous);
