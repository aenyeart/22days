import { Header } from "@rneui/themed";
import { View, Pressable } from "react-native";
import { Icon } from "@rneui/themed";
import { connect } from "react-redux";
import { Text } from "./Text";

function Previous({ dispatch }) {
  return (
    <Header
      containerStyle={{
        borderBottomWidth: 0,
        borderBottomRightRadius: 35,
        backgroundColor: "rgba(255, 255, 255, .3)",
      }}
      centerComponent={
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 5,
            alignItems: 'center',
          }}>
          <Pressable
            onPress={() => dispatch({ type: 'DECREMENT' })}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} // Increase hitSlop
            style={{
              position: 'absolute',
              left: -50,
              padding: 11
            }}>
            <Icon name="chevron-left" color="white" />
          </Pressable>
          <Pressable
            onPress={() => dispatch({ type: 'DECREMENT' })}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 30 }} // Increase hitSlop
          >
            <Text style={{
              fontWeight: "600",
              fontSize: 20,
              paddingVertical: 11,
            }}>
              Previous Workout
            </Text>
          </Pressable>
        </View>
      } // End centerComponent
    />
  )
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Previous);
