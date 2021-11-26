import React from "react";
import { FlatList, View , ScrollView } from "react-native";
import Produtos from "../../controller/produtosController";
import ListItem from "../ListItemCarrinho";
import styles from "../ListItemCarrinho/style";

export default function ListForm({navigation}){
    var produtos = Produtos
    var numCols = 1
    
    var renderItem = ({ item }) => {
        return (
            <ListItem item={item} navigation={navigation}/>
        );
      }

    return(
        <FlatList
            contentContainerStyle={{height:'100%'},styles.containerItem}
            data={produtos}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={numCols}
            scrollEnabled={true}/>
        
    )
}