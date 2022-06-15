import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";

// import the type of catagories the user can select
import catagories from "../../../config/catagories.json";

// import the stylesheet
import styles from "./styles";

// for the select menu
import RNPickerSelect from "react-native-picker-select";

export default function CreateTransaction({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [MessageBox, setMessageBox] = useState();
  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("http://localhost:3000/api/create", {
        data: data,
      })
      .then((req) =>
        req.status === 200
          ? setMessageBox("yes everyting is in order")
          : setMessageBox("something went wrong")
      )
      .catch((err) => {
        console.error(err);
        setMessageBox(`ERROR: ${err}`);
      });
  };

  return (
    <View>
      <Text>{MessageBox}</Text>

      <Text>name</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="product name"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="ProductName"
      />
      {errors.ProductName && <Text>This is required.</Text>}

      <Text>price</Text>
      <Controller
        control={control}
        rules={{
          maxLength: 100,
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="price"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="decimal-pad"
          />
        )}
        name="price"
      />
      {errors.price && <Text>This is required.</Text>}

      <Text>vat</Text>
      <Controller
        control={control}
        rules={{
          maxLength: 100,
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="vat"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            type="number"
            keyboardType="number-pad"
          />
        )}
        name="vat"
      />
      {errors.vat && <Text>This is required.</Text>}

      <Text>catagory</Text>
      <Controller
        control={control}
        rules={{
          maxLength: 100,
          required: true,
        }}
        render={({ field: { onChange } }) => (
          <RNPickerSelect
            placeholder={{
              label: "Select a catagory...",
              value: null,
              color: "#000000",
            }}
            onValueChange={onChange}
            items={catagories}
          />
        )}
        name="catagory"
      />
      {errors.catagory && <Text>This is required.</Text>}

      <Text>type</Text>
      <Controller
        control={control}
        rules={{
          maxLength: 100,
          required: true,
        }}
        render={({ field: { onChange } }) => (
          <RNPickerSelect
            placeholder={{
              label: "Select a cashflow type...",
              value: null,
              color: "#000000",
            }}
            onValueChange={onChange}
            items={[
              { label: "income", value: "income" },
              { label: "expense", value: "expenses" },
            ]}
          />
        )}
        name="type"
      />
      {errors.type && <Text>This is required.</Text>}

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
