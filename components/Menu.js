import {Button, View} from "react-native";
import React from "react";
import {persistor} from "../store";
import Incrementer from "./Incrementer";

export default function Menu() {
  return (
    <View>
      <Incrementer />
      <Button title="Purge" onPress={() => persistor.purge()}/>
    </View>
  );
}
