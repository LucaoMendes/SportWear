import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons'; 
import styles from './style'
import colors from '../../styles/colors';
export function headerRight(){
    return (
        <View style={styles.headerRight}>
            <TouchableOpacity>
                <Feather name="shopping-cart" size={24} style={styles.cartHeaderIcon} />
            </TouchableOpacity>
        </View>
    )
}

export function drawerOptions(){
    return({ 
        title:"SportWear",
        drawerLabel:'Inicio',
        headerShown:true,
        headerStyle:styles.headerStyle,
        headerTintColor:colors.textHeaderColor,
        headerRight: ()=>headerRight()
    })
}