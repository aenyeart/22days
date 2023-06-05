import {Pressable, View} from "react-native";
import React from "react";
import {persistor} from "../store/store";
import Incrementer from "./Incrementer";

export default function Menu() {
  return (
    <View>
      <Incrementer />
      <Pressable title="Purge" onPress={() => persistor.purge()}/>
    </View>
  );
}
