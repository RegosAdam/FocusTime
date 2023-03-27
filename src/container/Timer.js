import React, { useState } from "react";
import { Text, View, StyleSheet, Vibration } from "react-native";
import { ProgressBar } from "react-native-paper";
import { useKeepAwake } from "expo-keep-awake";
import { Countdown } from "../components/Countdown";
import { RoundedButton } from "../components/RoundedButton";
import { spacing } from "../utils/sizes";
import { colors } from "../utils/colors";
import { Timing } from "./Timing";

const ONE_SECOND_IN_MS = 1000;
const PATTERN = [
  0.5 * ONE_SECOND_IN_MS,
  0.5 * ONE_SECOND_IN_MS,
  0.5 * ONE_SECOND_IN_MS,
  0.5 * ONE_SECOND_IN_MS,
  0.5 * ONE_SECOND_IN_MS,
  0.5 * ONE_SECOND_IN_MS,
  0.5 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.25);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />
        <View style={{ paddingTop: spacing.xxl }}>
          <Text style={styles.title}>Focusing On:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar
          progress={progress}
          color={colors.white}
          style={{
            height: spacing.sm,
            backgroundColor: "rgba(255, 255, 255, 0.4)",
          }}
        />
      </View>
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton
            title="Start"
            onPress={() => setIsStarted(true)}
          ></RoundedButton>
        )}
        {isStarted && (
          <RoundedButton
            title="Pause"
            onPress={() => setIsStarted(false)}
          ></RoundedButton>
        )}
        <RoundedButton title="Cancel" onPress={clearSubject} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: spacing.xxl,
  },
  buttonWrapper: {
    flex: 0.35,
    flexDirection: "row",
    padding: spacing.xxl,
    justifyContent: "space-evenly",
  },
  title: {
    color: colors.white,
    textDecorationStyle: "solid",
    textDecorationColor: colors.white,
    textDecorationLine: "underline",
    fontSize: spacing.md,
    fontWeight: "bold",
    paddingTop: spacing.lg,
    textAlign: "center",
  },
  task: {
    color: colors.white,
    fontSize: spacing.md,
    fontStyle: "italic",
    fontWeight: "bold",
    paddingBottom: spacing.md,
    textAlign: "center",
  },
  timingWrapper: {
    flex: 0.15,
    paddingTop: spacing.xxl,
    paddingBottom: spacing.xxl,
    paddingLeft: spacing.md,
    paddingRight: spacing.md,
    flexDirection: "row",
  },
});
