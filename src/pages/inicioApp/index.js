import React, { useLayoutEffect } from 'react'
import { Text, View } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getUserInfo , logoutUser } from '../../controller/usuarioController';
import ListForm from '../../components/ListForm';
import styles from './style'

export default function InicioApp ({navigation}){
    const [user,setUser] = React.useState(null)
    React.useEffect(()=>{
        const putUser = async()=>{
            u = await getUserInfo()
            setUser(u)
        }
        putUser()
    },[])

    return(
        <View style={styles.container}>
            <ListForm/>
        </View>
    )
}