import React, { useState } from "react";
import { Button, View, Text } from "react-native";
import { set, useForm } from "react-hook-form";
import axios from "axios";

export default function CreateTransaction() {
  const { register, handleSubmit } = useForm();
  const [MessageBox, setMessageBox] = useState();
  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("http://localhost:3000/api/create", {
        data: data,
      })
      .then((req) =>
        (req.status === 200) ?
        setMessageBox('yes everyting is in order') :
        setMessageBox('something went wrong')
      )
      .catch((err) => {
        console.error(err);
        setMessageBox(`ERROR: ${err}`);
      });
  };

  return (
    <View>
      <View>
        <Text>{MessageBox}</Text>
      </View>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="product name"
          {...register("product", { required: true, placeholder: "kaas" })}
        />
        <input
          placeholder="21.00"
          {...register("price", { required: true, pattern: "/^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$" })}
        />
        <select {...register("vat", { required: true })}>
          <option value="21">21%</option>
          <option value="9">9%</option>
          <option value="0">0%</option>
        </select>
        <select {...register("catagory", { required: true })}>
          <option value="21">overig</option>
        </select>
        <select {...register("type", { required: true })}>
          <option value="expenses">expenses</option>
          <option value="income">income</option>
        </select>
        <input type="submit" />
      </form>
    </View>
  );
}
