import { helloAsync } from "ExpoWriteBinary";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const call = async () => {
    await helloAsync({});
  };

  return (
    <View style={styles.container}>
      <Button onPress={call} title="PRESS" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
