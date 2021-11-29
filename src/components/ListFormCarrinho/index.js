import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { cart }from "../../controller/carrinhoController";
import ListItem from "../ListItemCarrinho";
import styles from "../ListItemCarrinho/style";
import {Snackbar} from 'react-native-paper'
import { View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function ListForm({navigation},reload){
    //Controle de Colunas da pagina de carrinho
    const numCols = 1

    //Variaveis de estado
    const [carrinho,setCarrinho] = useState(cart);
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

    //Parametro para atualização da flatlist
    if(reload)
        ()=>onRefresh()

    //Remover item da lista
    const remItem = (item)=>{
        if(cart.includes(item)){
            var i = cart.indexOf(item)
            cart.splice(i,1)
            setCarrinho(cart)
            openSnack()
            onRefresh()
        }
    }
    
    //Atualização da flatlist
    const onRefresh = () => {
        setCarrinho(cart)
        setRefresh(true);
        setTimeout(()=>{
            setRefresh(false)
        },500)
      };

    var renderItem = ({ item }) => {
        return (
            <ListItem item={item} navigation={navigation} remItem={remItem} />
        );
      }
    var emptyComp = ()=>{
        return (
            <View style={{
                height:"100%",
                width:"100%",
                alignItems:"center",
                justifyContent:"center",
                
                }}> 
                <AntDesign name="shoppingcart" size={90} color="grey" />
                <Text>O Seu carrinho está vazio, volte para continuar comprando</Text>
                <TouchableOpacity style={{
                    margin:20,
                    backgroundColor:'grey',
                    borderRadius:10,
                    padding:10,
                }} onPress={()=>{navigation.navigate("InicioApp")}}>
                   <MaterialCommunityIcons name="backburger" size={30} color="white" />
                </TouchableOpacity>
            </View>
        )
    }
    return(
        <>
        <Snackbar
                duration={1000}
                visible={visibleSnack}
                onDismiss={onDismissSnackBar}
                style={{borderRadius:10,bottom:10}}
                wrapperStyle={{alignContent:'center'}}
                >
                Removido do carrinho
            </Snackbar>
        <FlatList
            contentContainerStyle={styles.containerItemCart}
            data={carrinho}
            ListEmptyComponent={emptyComp}
            refreshing={refresh}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={numCols}
            scrollEnabled={true}
           onRefresh={() => onRefresh()}
            />
        </>
    )
}