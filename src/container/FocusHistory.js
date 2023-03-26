import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) return <Text style={styles.titleNoList}>You haven't focused on anything yet!</Text>;

  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things you've focused on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    flex: 1,
  },
  item: {
    color: colors.white,
    fontSize: fontSizes.md,
    paddingLeft: spacing.md,
    paddingTop: spacing.sm,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    paddingBottom: spacing.sm,
    fontWeight: "bold",
    textDecorationStyle: "solid",
    textDecorationColor: colors.white,
    textDecorationLine: "underline",
  },
  titleNoList: {
    padding: spacing.lg,
    color: colors.white,
    fontSize: fontSizes.md,
    paddingBottom: spacing.sm,
    fontWeight: "bold",
    textDecorationStyle: "solid",
    textDecorationColor: colors.white,
    textDecorationLine: "underline",
  },
});
