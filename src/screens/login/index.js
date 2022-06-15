import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, View, TextInput, Button } from "react-native";
import styles from "./styles";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

export default function LoginScreen({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // handle login
    // const api = await axios.post("http://localhost:3000/api/auth/signin/email",{body: data})

    // store the combo
    SecureStore.setItemAsync("user", JSON.stringify(data));

    console.log(data);
    navigation.push("Home");
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>username</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="username"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="username"
      />
      {/* {errors.ProductName && <Text>This is required.</Text>} */}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="password"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      {/* {errors.ProductName && <Text>This is required.</Text>} */}

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
