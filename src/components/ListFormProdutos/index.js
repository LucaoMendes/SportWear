import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import styles from "../ListItemCarrinho/style";
import ListItem from "../ListItemProdutos";
import {Snackbar} from 'react-native-paper'
import CartOper from "../../controller/carrinhoController";
//Bug 001 não usar função PRODUTOS - Futuramente corrigir controladora
//import { Produtos } from "../../controller/produtosController";
import database from '../../config/firebaseConfig'
export default function ListForm({navigation}){
    var numCols = 3

    const [produtos,setProdutos] = useState([])
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
    
    
    const onRefresh = () => {
        setRefresh(true);
        getProdutos();
      };

    const getProdutos = () =>{
        //Correção BUG 001
        const subscriber = 
            database.collection("produtos")
            .orderBy('nomeProduto','asc')
            .onSnapshot((query)=>{
            
                const list = []
                query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id})
                })
                setProdutos(list)
                setRefresh(false)
            })
        return ()=>subscriber()
    }


      //Adição ao carrinho
    const addItem = (item)=>{
        console.log('recebeu item? ',item)
        CartOper(2,item)
        openSnack()

    }

      //Efeito de entrada (onMount)
    useEffect(()=>{
        onRefresh()
    },[])

    
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
                wrapperStyle={{alignContent:'center'}} >
                Adicionado ao carrinho
            </Snackbar>
            <FlatList
            contentContainerStyle={styles.containerItem}
            data={produtos}
            renderItem={renderItem}
            refreshing={refresh}
            onRefresh={()=>onRefresh()}
            keyExtractor={item => item.id}
            numColumns={numCols} />
        </View>
    )
}