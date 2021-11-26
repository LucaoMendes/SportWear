import React from "react";
import { createDrawerNavigator , CardStyleInterpolators} from '@react-navigation/drawer'

//Pages
import Carrinho from "../pages/carrinho";
import InfoProduto from "../pages/infoProduto";
import InicioApp from "../pages/inicioApp";
import Pedido from "../pages/pedido";
import { drawerOptions } from "../components/DrawerHeader";
import DrawerContent from "../components/DrawerContent";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "../config/RootNavigation";
const Drawer = createDrawerNavigator()





export default function DrawerNavigation({navigation}){
    return(
        <NavigationContainer independent={true} ref={navigationRef}>
            <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props}/>}
            initialRouteName="Carrinho"
            
            >
                <Drawer.Screen 
                    name="InicioApp"
                    component={InicioApp}
                    options={drawerOptions()}
                    
                />
                <Drawer.Screen 
                    name="Carrinho"
                    component={Carrinho}
                    options={drawerOptions()}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}