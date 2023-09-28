import { Header } from "@rneui/themed";
import { View, Pressable} from "react-native";
import { Icon } from "@rneui/themed";

import { Text } from "./Text";
export default () => {
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
            style={{
              position: 'absolute',
              left: -50,
              padding: 11
            }}>
            <Icon name="chevron-left" color="white" />
          </Pressable>
          <Pressable
            onPress={() => dispatch({ type: 'DECREMENT' })}>
            <Text style={{
              fontWeight: "600",
              fontSize: 20,
              paddingVertical: 11,
            }}>
              Previous Workout
            </Text>
          </Pressable>
        </View>
      }
    />
  );
}