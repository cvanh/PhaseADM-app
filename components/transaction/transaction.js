import { View, Text } from "react-native";
import style from "./style";

export default function Transaction(props) {
  const { id, BTW, catagory, date, type, product, prijs } = props.data;
  console.log(props);
  return (
    <View style={style.TransactionCard}>
      <Text>{prijs}$</Text>
      <Text style={style.ProductName}>{product}</Text>
    </View>
  );
}
