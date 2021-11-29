import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import Produtos from "../../controller/produtosController";
import styles from "../ListItemCarrinho/style";
import ListItem from "../ListItemProdutos";
import {Snackbar} from 'react-native-paper'
import CartOper from "../../controller/carrinhoController";
export default function ListForm({navigation}){
    var produtos = Produtos();
    console.log(produtos)
    var numCols = 3
    const [refresh, setRefresh] = useState(false);
    const [visibleSnack , setVisibleSnack] = React.useState(false)
    
    //ArrowFunctions
    const onToggleSnackBar = ()=> setVisibleSnack(!visibleSnack)
    const onDismissSnackBar = () => setVisibleSnack(false)
    const openSnack = ()=>{
        if(visibleSnack){
            setVisibleSnack(true)
        }else{
            onToggleSnackBar();
        }
    }
    const addItem = (item)=>{
        console.log('recebeu item? ',item)
        CartOper(2,item)
        openSnack()
    }
    var renderItem = ({ item }) => {
        return (
            <ListItem item={item} navigation={navigation} addItem={addItem}/>
        );
      }
    return(
        <View style={{height:"100%"}}>
            <Snackbar
                duration={1000}
                visible={visibleSnack}
                onDismiss={onDismissSnackBar}
                style={{borderRadius:10,bottom:10}}
                wrapperStyle={{alignContent:'center'}}
                >
                Adicionado ao carrinho
            </Snackbar>
            <FlatList
            contentContainerStyle={styles.containerItem}
            data={produtos}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={numCols} />
        </View>
    )
}