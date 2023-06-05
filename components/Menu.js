import {Pressable, View} from "react-native";
import React from "react";
import {persistor} from "../store/store";
import Incrementer from "./Incrementer";
import { Text } from './Text.js';


export default function Menu() {
  return (
    <View>
      <Incrementer />
      <Pressable onPress={() => persistor.purge()}>
        <Text>Purge</Text>
      </Pressable>
    </View>
  );
}
