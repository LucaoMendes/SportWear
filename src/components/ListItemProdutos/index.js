import React from "react";
import { Image, Text, TouchableOpacity, View  } from "react-native";
import styles from "./style";
import { FontAwesome } from '@expo/vector-icons'; 
import {navigate} from '../../config/RootNavigation'
import { FontAwesome5 } from '@expo/vector-icons'; 
export default function ListItem({item,navigation,addItem}){
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
            <TouchableOpacity style={styles.produtoLista} onPress={()=>navigation.navigate("InfoProduto",{item:item})}>
                <View style={styles.produtoListaImagem}>
                    <Image
                        style={styles.produtoImg}
                        source={{uri:item.img}}
                    />
                </View>
                <View style={styles.produtoListaTitulo}>
                    <Text style={styles.produtoListaTituloText}>{item.nomeProduto}</Text>
                </View>
                <View style={styles.produtoListaPreco}>
                    <Text style={styles.produtoListaPrecoText}>R${getValor()}</Text>
                </View>
                <View style={styles.produtoListaBtnView}>
                        <TouchableOpacity style={styles.produtoListaBtnCarrinho} onPress={()=>{
                            addItem(item)
                            console.log("adicionado ao carrinho ",item)
                        }}>
                            <FontAwesome name="cart-plus" size={15} color="white" />
                        </TouchableOpacity>
                </View>
            </TouchableOpacity>
        )
    
    
}