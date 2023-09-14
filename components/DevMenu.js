import {Pressable, View} from "react-native";
import React from "react";
import {persistor} from "../store/store";
import Incrementer from "./Incrementer";
import { Text } from './Text.js';


export default function DevMenu() {
  return (
    <View style={{width: "100%"}}>
      <Incrementer />
      <Pressable onPress={() => persistor.purge()}>
        <Text style={{ width: "100%", textAlign: "center", paddingHorizontal: "auto" }}>Purge</Text>
      </Pressable>
    </View>
  );
}
