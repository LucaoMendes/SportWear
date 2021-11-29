import React from "react";
import { Image, Text, TouchableOpacity, View  } from "react-native";
import styles from "./style";
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import CartOper from "../../controller/carrinhoController";
export default function ListItem({item,navigation,remItem,onToggleSnackBar}){
        return(
            <TouchableOpacity style={styles.produtoLista} >
                <View style={styles.produtoListaImagem}>
                    <Image
                        style={styles.produtoImg}
                        source={item.img}
                    />
                </View>

                <View style={styles.boxItens}>
                    <View style={styles.produtoListaTitulo}>
                        <Text style={styles.produtoListaTituloText}>{item.nomeProduto}</Text>
                    </View>
                    <View style={styles.produtoListaPreco}>
                        <Text style={styles.produtoListaPrecoText}>R${item.valorVenda},00</Text>
                    </View>
                    <View style={styles.produtoListaBtnView}>
                            <TouchableOpacity style={styles.produtoListaBtnCarrinho} onPress={()=>{
                        remItem(item);
                        console.log("Removido do carrinho ",item)
                        
                    }}>
                            <FontAwesome5 name="trash" size={15} color="white" />
                            </TouchableOpacity> 
                    </View>

                </View>
                
                
            </TouchableOpacity>
        )
    
    
}