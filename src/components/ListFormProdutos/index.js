import React from "react";
import { FlatList, View } from "react-native";
import Produtos from "../../controller/produtosController";
import ListItem from "../ListItemProdutos";
export default function ListForm({navigation}){
    var produtos = Produtos
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