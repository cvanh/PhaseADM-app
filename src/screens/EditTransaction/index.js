import axios from "axios";
import React, { useState, useEffect } from "react";
import { Text, View, TextInput, Button } from "react-native";

export default function EditTransaction({ navigation, route }) {
  const [data, setData] = useState();
  console.log(process.env);
  useEffect(() => {
    const fetch = async () => {
      const d = await axios.get("");
      setData(d);
    };
    fetch();
  }, []);
  console.log(route.params.id);
  return (
    <View>
      <Text>edit transaction</Text>
    </View>
  );
}
