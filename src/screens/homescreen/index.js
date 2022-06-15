import * as React from "react";
import { Button, View, Text } from "react-native";
import * as SecureStore from "expo-secure-store";

export default function HomeScreen({ navigation }) {
  const [user, setUser] = React.useState();
  SecureStore.getItemAsync("user").then((data) => {
    setUser(data);
  });
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="logout"
        onPress={() => {
          SecureStore.deleteItemAsync("user") && navigation.push("Login");
        }}
      />
      <Text>{user.username}</Text>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
      <Button
        style={{ margin: 10 }}
        title="create transaction"
        onPress={() => navigation.navigate("CreateTransaction")}
      />
    </View>
  );
}
