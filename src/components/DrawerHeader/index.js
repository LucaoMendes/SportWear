import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons'; 
import styles from './style'
import colors from '../../styles/colors';
import * as RootNavigation from '../../config/RootNavigation';

export function drawerOptions(){
    const config = {
        animation: 'spring',
        config: {
          stiffness: 1000,
          damping: 500,
          mass: 3,
          overshootClamping: true,
          restDisplacementThreshold: 0.01,
          restSpeedThreshold: 0.01,
        },
      };
    return({ 
        title:"SportWear",
        drawerLabel:'Inicio',
        headerShown:true,
        headerStyle:styles.headerStyle,
        headerTintColor:colors.textHeaderColor,
        cardShadowEnabled:true,
        transitionSpec: {
            open: config,
            close: config,
          },
        transitionConfig: () => ({
            screenInterpolator: CardStackStyleInterpolator.forHorizontal,
       }),
        headerRight: ()=>{return(
            <View style={styles.headerRight}>
                <TouchableOpacity onPress={()=>{RootNavigation.navigate("Carrinho")}}>
                    <Feather name="shopping-cart" size={24} style={styles.cartHeaderIcon} />
                </TouchableOpacity>
            </View>
        )}
    })
}