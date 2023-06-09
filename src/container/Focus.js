import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { colors } from "../utils/colors";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../components/RoundedButton";
import { spacing } from "../utils/sizes";

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          selectionColor={colors.darkOrange}
          underlineColor={colors.darkOrange}
          activeUnderlineColor={colors.darkOrange}
          label="What would you like to focus on?"
        />
        <View style={styles.button}>
          <RoundedButton
            title="Start"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  button: {
    justifyContent: "center",
  },
  textInput: {
    flex: 1,
    marginRight: spacing.lg,
  },
  inputContainer: {
    paddingTop: spacing.xxl,
    padding: spacing.lg,
    flexDirection: "row",
    justifyContent: "flex-end",
    },
});
