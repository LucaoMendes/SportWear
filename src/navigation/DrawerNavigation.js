import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer'

//Pages
import Carrinho from "../pages/carrinho";
import InfoProduto from "../pages/infoProduto";
import InicioApp from "../pages/inicioApp";
import Pedido from "../pages/pedido";
import { drawerOptions } from "../components/DrawerHeader";
import DrawerContent from "../components/DrawerContent";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "../config/RootNavigation";
import addProdutos from "../pages/addProdutos";
const Drawer = createDrawerNavigator()





export default function DrawerNavigation({navigation}){
    return(
        <NavigationContainer independent={true} ref={navigationRef}>
            <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props}/>}
            initialRouteName="AddProdutos"
            options={{
                
            }}
            >
                <Drawer.Screen 
                    name="InicioApp"
                    component={InicioApp}
                    options={drawerOptions(0)}
                    
                />
                <Drawer.Screen 
                    name="Carrinho"
                    component={Carrinho}
                    options={drawerOptions()}
                />
                <Drawer.Screen 
                    name="AddProdutos"
                    component={addProdutos}
                    options={drawerOptions()}
                />
                <Drawer.Screen 
                    name="InfoProduto"
                    component={InfoProduto}
                    options={drawerOptions(1)}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}