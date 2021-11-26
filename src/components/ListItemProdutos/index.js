import React from "react";
import { Image, Text, TouchableOpacity, View  } from "react-native";
import styles from "./style";
import { Foundation } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
export default function ListItem({item,navigation}){
        return(
            <TouchableOpacity style={styles.produtoLista}>
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
                        <TouchableOpacity style={styles.produtoListaBtnCarrinho}>
                            <FontAwesome name="cart-plus" size={15} color="white" />
                        </TouchableOpacity>
                    <TouchableOpacity style={styles.produtoListaBtnInfo}>
                            <FontAwesome5 name="info" size={15} color="white" />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        )
    
    
}