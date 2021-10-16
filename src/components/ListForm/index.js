import React from "react";
import { FlatList, View } from "react-native";
import ListItem from "../ListItem";
export default function ListForm({navigation}){
    const produtos = [
        {
            id:"03232",
            nomeProduto : "Tênis nike sport",
            categoria: "Esportivos",
            valorVenda: 650,
        },
        {
            id:"0323s2",
            nomeProduto : "Tênis niske sport",
            categoria: "Esportivos",
            valorVenda: 650,
        },
        {
            id:"0323d2",
            nomeProduto : "Tênis nike sport",
            categoria: "Esportivos",
            valorVenda: 650,
        },
        {
            id:"0323f2",
            nomeProduto : "Tênis niske sport",
            categoria: "Esportivos",
            valorVenda: 650,
        },
        {
            id:"0323g2",
            nomeProduto : "Tênis nike sport",
            categoria: "Esportivos",
            valorVenda: 650,
        },
        {
            id:"03h232",
            nomeProduto : "Tênis niske sport",
            categoria: "Esportivos",
            valorVenda: 650,
        },
        {
            id:"03v32",
            nomeProduto : "Tênis nike sport",
            categoria: "Esportivos",
            valorVenda: 650,
        },
        {
            id:"0323c2",
            nomeProduto : "Tênis niske sport",
            categoria: "Esportivos",
            valorVenda: 650,
        }
    ]

    var renderItem = ({ item }) => {
        return (
            <ListItem item={item} navigation={navigation}/>
        );
      }

    return(
        <View style={{height:"100%"}}>
            <FlatList
            contentContainerStyle={{height:'100%'}}
            data={produtos}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={3} />
        </View>
    )
}