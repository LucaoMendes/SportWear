import React from "react";
import { FlatList, View } from "react-native";
import Produtos from "../../controller/produtosController";
import styles from "../ListItemCarrinho/style";
import ListItem from "../ListItemProdutos";
export default function ListForm({navigation},isCarrinho){
    var produtos = Produtos
    var numCols = 3
    
    var renderItem = ({ item }) => {
        return (
            <ListItem item={item} navigation={navigation}/>
        );
      }

    return(
        <View style={{height:"100%"}}>
            <FlatList
            contentContainerStyle={{height:'100%'},styles.containerItem}
            data={produtos}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={numCols} />
        </View>
    )
}