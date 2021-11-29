import React from 'react'
import { Image, Text, View } from "react-native";
import styles from './style';
export default function InfoProduto ({route,navigation}){
    var item = route.params.item
    var valor = parseInt(item.valorVenda).toString() + ',00'
    var valor2 = parseFloat(item.valorVenda).toString().replace(".",",")
    
    const getValor = ()=>{
        valor2.replace(".",",")
        if(item.valorVenda%1 == 0)
            return  valor 
        else
            return valor2
    }
    return(
        <View style={styles.container}>
            
            <View style={styles.imageBox}>
                <Image style={styles.image} source={{uri:item.img}}/>
                <View style={styles.productCategoView}>
                <Text style={styles.productCategoText}>
                    {item.categoria}
                </Text>
            </View>
            </View>
            <View style={styles.productTitle}>
                <Text style={styles.productTitleText}>
                    {item.nomeProduto}
                </Text>
            </View>
            <View style={styles.productValue}>
                <Text style={styles.productValueText}>
                    R$ {getValor()}
                </Text>
            </View>
        </View>
    )
}