import React from 'react'
import { Text, View } from "react-native";
export default function InfoProduto ({route,navigation}){
    return(
        <View><Text>
            {JSON.stringify(route.params.item)}
            </Text></View>
    )
}