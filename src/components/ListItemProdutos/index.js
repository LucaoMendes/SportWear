import React from "react";
import { Image, Text, TouchableOpacity, View  } from "react-native";
import styles from "./style";
import { FontAwesome } from '@expo/vector-icons'; 
import {navigate} from '../../config/RootNavigation'
import { FontAwesome5 } from '@expo/vector-icons'; 
export default function ListItem({item,navigation,addItem}){
        return(
            <TouchableOpacity style={styles.produtoLista} onPress={()=>navigation.navigate("InfoProduto",{item:item})}>
                <View style={styles.produtoListaImagem}>
                    <Image
                        style={styles.produtoImg}
                        source={item.img}
                    />
                </View>
                <View style={styles.produtoListaTitulo}>
                    <Text style={styles.produtoListaTituloText}>{item.nomeProduto}</Text>
                </View>
                <View style={styles.produtoListaPreco}>
                    <Text style={styles.produtoListaPrecoText}>R${item.valorVenda},00</Text>
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