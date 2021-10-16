import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer'

//Pages
import Carrinho from "../pages/carrinho";
import InfoProduto from "../pages/infoProduto";
import InicioApp from "../pages/inicioApp";
import Pedido from "../pages/pedido";
import { drawerOptions } from "../components/DrawerHeader";

const Drawer = createDrawerNavigator()

export default function DrawerNavigation({navigation}){
    return(
        <Drawer.Navigator
        initialRouteName="InicioApp">
            <Drawer.Screen 
                name="InicioApp"
                component={InicioApp}
                options={drawerOptions()}
            />
        </Drawer.Navigator>
    )
}