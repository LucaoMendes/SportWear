import React, { useLayoutEffect } from 'react'
import { Text, View } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getUserInfo , logoutUser } from '../../controller/usuarioController';
import ListForm from '../../components/ListFormProdutos';
import styles from './style'
import Produtos from '../../controller/produtosController';


export default function InicioApp ({navigation,route}){
    const [user,setUser] = React.useState(null)
    React.useEffect(()=>{
        const putUser = async()=>{
            var u = await getUserInfo()
            setUser(u)
        }
        putUser()
    },[])

    
    return(
        <View style={styles.container}>
            <ListForm navigation={navigation}/>
        </View>
    )
}