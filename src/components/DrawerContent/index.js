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
    var cargo = ''
    const [user,setUser] = React.useState(null)
    React.useEffect(()=>{
        const putUser = async()=>{
            var u = await getUserInfo()
            setUser(u)
        }
        putUser()
        
        
    },[])
    
    switch(user[0].nvAuth){
        case 0:
            cargo = ''
        break;
        case 1: 
            cargo = 'Vendedor'
        break
        case 2:
            cargo = 'Gerente'
        break
        case 3:
            cargo = 'Administrador de Software'
    }
    
    return(
        <DrawerContentScrollView>
            <View  style={styles.headerDrawerContainer}>
            <Avatar rounded size={200} icon={{ name: 'account-circle' }} overlayContainerStyle={styles.avatarUser}/>
                <View style={styles.userInfoBox}>
                    <Text style={styles.userInfo}>{user[0].nome}</Text>
                    <Text style={styles.userInfo}>{cargo}</Text>
                </View>
            </View>
            <DrawerItem 
                style={styles.drawerItem}
                labelStyle={styles.drawerItemLabel}
                label="Inicio" 
                icon={()=> <AntDesign name="home" size={24} color="black" />}
                onPress={()=>{navigation.navigate("InicioApp") }}
                    />    
        </DrawerContentScrollView>
    )
}