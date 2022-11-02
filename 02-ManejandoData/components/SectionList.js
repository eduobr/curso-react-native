import React from "react";
import { StyleSheet, View, Text, SectionList } from "react-native";

const data = [
  { key: "1", name: "Edu" },
  { key: "2", name: "Chanchito Feliz" },
  { key: "3", name: "Chanchito Triste" },
  { key: "4", name: "Fluffykins" },
  { key: "5", name: "Pelusa" },
  { key: "6", name: "Edu" },
  { key: "7", name: "Chanchito Feliz" },
  { key: "8", name: "Chanchito Triste" },
  { key: "9", name: "Fluffykins" },
  { key: "10", name: "Pelusa" },
  { key: "11", name: "Edu" },
  { key: "12", name: "Chanchito Feliz" },
  { key: "13", name: "Chanchito Triste" },
  { key: "14", name: "Fluffykins" },
  { key: "15", name: "Pelusa" },
];

export default function Buttons() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {
            title: "Grupo 1",
            data: [
              { key: "1", name: "Edu" },
              { key: "2", name: "Chanchito Feliz" },
              { key: "3", name: "Chanchito Triste" },
              { key: "4", name: "Fluffykins" },
              { key: "5", name: "Pelusa" },
            ],
          },
          {
            title: "Grupo 2",
            data: [
              { key: "6", name: "Edu" },
              { key: "7", name: "Chanchito Feliz" },
              { key: "8", name: "Chanchito Triste" },
              { key: "9", name: "Fluffykins" },
              { key: "10", name: "Pelusa" },
            ],
          },
          {
            title: "Grupo 3",
            data: [
              { key: "11", name: "Edu" },
              { key: "12", name: "Chanchito Feliz" },
              { key: "13", name: "Chanchito Triste" },
              { key: "14", name: "Fluffykins" },
              { key: "15", name: "Pelusa" },
            ],
          },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.section}>{section.title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 22,
    height: 50,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  section: {
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#ccc",
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
  },
});
