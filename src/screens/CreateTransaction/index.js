// import React, { useState } from "react";
// import { Button, View, Text } from "react-native";
// import { set, useForm } from "react-hook-form";
// import axios from "axios";

// export default function CreateTransaction() {
//   const { register, handleSubmit } = useForm();
//   const [MessageBox, setMessageBox] = useState("");
//   const onSubmit = (data) => {
//     console.log(data);

//     axios
//       .post("http://localhost:3000/api/create", {
//         data: data,
//       })
//       .then((req) =>
//         (req.status === 200) ?
//         setMessageBox('yes everyting is in order') :
//         setMessageBox('something went wrong')
//       )
//       .catch((err) => {
//         console.error(err);
//         setMessageBox(`ERROR: ${err}`);
//       });
//   };

//   return (
//     <View>
//         {/* <Text>{MessageBox}</Text> */}
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input
//           placeholder="product name"
//           {...register("product", { required: true, placeholder: "kaas" })}
//         />
//         <input
//           placeholder="21.00"
//           {...register("price", { required: true, pattern: "/^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$" })}
//         />
//         <select {...register("vat", { required: true })}>
//           <option value="21">21%</option>
//           <option value="9">9%</option>
//           <option value="0">0%</option>
//         </select>
//         <select {...register("catagory", { required: true })}>
//           <option value="21">overig</option>
//         </select>
//         <select {...register("type", { required: true })}>
          // <option value="expenses">expenses</option>
          // <option value="income">income</option>
//         </select>
//         <input type="submit" />
//       </form>
//     </View>
//   );
// }
import React, { useState } from "react";
import { Text, View, TextInput, Button, Alert, TextInputBase } from "react-native";
import { useForm, Controller } from "react-hook-form";
import styles from "./styles";
import RNPickerSelect from 'react-native-picker-select';
import axios from "axios";

export default function CreateTransaction() {
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
        name="product_name"
      />
      {errors.product_name && <Text>This is required.</Text>}

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

      <Controller
        control={control}
        rules={{
          maxLength: 100,
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <RNPickerSelect
            onValueChange={onChange}
            items={[
                { label: 'thirt', value: 'tshirt' },
                { label: 'drukker', value: 'drukker' },
            ]}
        />
        )}
        name="catagory"
      />
      {errors.catagory && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <RNPickerSelect
            onValueChange={onChange}
            items={[
                { label: 'income', value: 'income' },
                { label: 'expense', value: 'expenses' },
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
