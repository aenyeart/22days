import { FlatList, View, Text, StyleSheet } from "react-native";
import styles from "../styles/styles.js";
// import { connect } from 'react-redux';

const data = [
  { title: 'Andrew' },
  { title: '& Gedi' },
];

const render = (item) => {
  return (
    <View style={styles.menuItem}>
      <Text style={styles.title}>{item.item.title}</Text>
      {console.log(item)}
    </View>
  );
};

export default function Menu() {
  return (
    <View >
      <FlatList data={data} renderItem={render}>

      </FlatList>
    </View >
  );
}