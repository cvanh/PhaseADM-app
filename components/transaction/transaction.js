import { View, Text } from "react-native";

export default function Transaction(props){
    const {id, product, prijs} = props
    return(
        <View>
            <Text>{prijs}</Text>
        </View>
    )
}