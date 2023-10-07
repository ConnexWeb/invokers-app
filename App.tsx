import { StyleSheet, Text, View } from "react-native";
import { Cards } from "./src/screens/Material/Cards";
import React from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <Cards />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
