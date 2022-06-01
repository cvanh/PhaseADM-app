import * as React from "react";
import { View, Text, Alert, Button } from "react-native";
import style from "./style";

export default function Transaction(props) {
  const { id, BTW, catagory, date, type, product, prijs } = props.data;
  return (
    <View style={style.TransactionCard}>
      <Text>{prijs}$</Text>
      <Text style={style.ProductName}>{product}</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          props.navigation.navigate("EditTransaction", {
            id: id,
          });
        }}
      />
    </View>
  );
}
