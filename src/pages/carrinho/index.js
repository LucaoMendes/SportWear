import React, { useEffect, useState } from 'react'
import { Text } from 'react-native';
import { View } from "react-native";
import styles from './style';
import ListForm from '../../components/ListFormCarrinho';
import * as carro from '../../controller/carrinhoController';

export default function Carrinho ({navigation,route}){
    return(
        <View style={{height:"100%"}}>
            <ListForm navigation={navigation} reload={route.reload}/>
        </View>
    )
}