import { Button, View, Text, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../../components/loading/loading";
import Transaction from "../../../components/transaction/transaction";

export default function DetailsScreen({ navigation }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const api = await axios
        .get("http://localhost:3000/api/get?limit=2&WooCommerce=false")
        .catch((err) => {
          Alert.alert("ERROR", err.toString());
        });
      setData(api.data);
    };
    fetch();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>

      {!data ? (
        <Loading />
      ) : (
        data.transactions.map((element) => (
          <Transaction key={element.id} data={element} />
        ))
      )}

      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}
