import { Button, View, Text } from 'react-native';
import React, {useEffect} from 'react';
import axios from 'axios';
import Loading from "../../../components/loading/loading"

export default async function DetailsScreen({ navigation }) {
  useEffect(() => {
    const data = axios.get("http://localhost:3000/api/get?limit=2&WooCommerce=false")
  }, []);
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <View>
          <Loading/>
        </View>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }

