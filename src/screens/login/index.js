import * as React from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-web";
import styles from "./styles";

async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    alert("🔐 Here's your value 🔐 \n" + result);
  } else {
    alert("No values stored under that key.");
  }
}

export default function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>login</Text>
      <TextInput
        style={styles.input}
        onSubmitEditing={(event) => {
          getValueFor(event.nativeEvent.text);
        }}
        placeholder="Enter the key for the value you want to get"
      />
    </View>
  );
}
