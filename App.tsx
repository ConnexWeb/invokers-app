import { StyleSheet, Text, View } from "react-native";
import { Cards } from "./src/screens/Material/Cards";
import React from "react";
import { ThemeProvider } from "styled-components";

import { THEME } from "./src/styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={THEME}>
      <View style={styles.container}>
        <Cards />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
