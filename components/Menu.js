import { FlatList, View, Text, StyleSheet } from "react-native";

const data = [
  { title: 'Something' },
  { title: 'Gedi' },
];

const render = (item) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    backgroundColor: "red",
    fontSize: 32,
  },
});

export default function Menu() {
  return (
    <View >
      <FlatList data={data} renderItem={render}>

      </FlatList>
    </View >
  );
}