import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SecureStore from "expo-secure-store";

// screens
import HomeScreen from "./src/screens/homescreen/index.js";
import DetailsScreen from "./src/screens/detailsscreen/index.js";
import CreateTransaction from "./src/screens/CreateTransaction/index.js";
import LoginScreen from "./src/screens/login/index.js";
import EditTransaction from "./src/screens/EditTransaction/index.js";

const Stack = createNativeStackNavigator();

function App() {
  const user = SecureStore.getItemAsync("user");
  console.log(user);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {user ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen
              name="CreateTransaction"
              component={CreateTransaction}
            />
            <Stack.Screen name="EditTransaction" component={EditTransaction} />
          </>
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
