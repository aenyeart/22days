import {Button, View} from "react-native";
import React from "react";
import {persistor} from "../store";

export default function Menu() {
  return (
    <View>
      <Button title="Purge" onPress={() => persistor.purge()}/>
    </View>
  );
}
