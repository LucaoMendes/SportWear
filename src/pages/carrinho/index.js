import React from 'react'
import { Text } from 'react-native';
import { View } from "react-native";
import styles from './style';
import ListForm from '../../components/ListFormCarrinho';

export default function Carrinho ({navigation}){
    return(
        <View>
            <ListForm navigation={navigation}/>
        </View>
    )
}