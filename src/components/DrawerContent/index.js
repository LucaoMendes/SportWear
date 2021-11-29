import React from "react"
import { View , Text } from "react-native"

import styles from './style'
import { AntDesign , Octicons , MaterialIcons , FontAwesome5 ,Entypo } from '@expo/vector-icons'; 
import { DrawerContentScrollView , DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { Avatar } from 'react-native-elements';
import { TouchableOpacity } from "react-native-gesture-handler";
import { getUserInfo } from "../../controller/usuarioController";

function Hr(){
    return (
        <View 
        style={styles.hr}
        />
    )
}


export default function DrawerContent({navigation}){
    
    return(
        <DrawerContentScrollView>
            <View  style={styles.headerDrawerContainer}>
            <Avatar rounded size={200} icon={{ name: 'account-circle' }} overlayContainerStyle={styles.avatarUser}/>
              
            </View>
            <DrawerItem 
                style={styles.drawerItem}
                labelStyle={styles.drawerItemLabel}
                label="Inicio" 
                icon={()=> <AntDesign name="home" size={24} color="black" />}
                onPress={()=>{navigation.navigate("InicioApp") }}
                    />    
            <DrawerItem 
            style={styles.drawerItem}
            labelStyle={styles.drawerItemLabel}
            label="Adicionar Produtos" 
            icon={()=> <MaterialIcons name="post-add" size={24} color="black" />}
            onPress={()=>{navigation.navigate("AddProdutos") }}
                />    
                <DrawerItem 
            style={styles.drawerItem}
            labelStyle={styles.drawerItemLabel}
            label="Adicionar Filiais" 
            icon={()=> <MaterialIcons name="add-location-alt" size={24} color="black" />}
            onPress={()=>{navigation.navigate("InicioApp") }}
                />   
                
        </DrawerContentScrollView>
    )
}