import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/login'
import DrawerNavigation from "./DrawerNavigation"
const Stack = createStackNavigator()

export default function StackPrimario(){
    return(
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown:false}}
          />
          <Stack.Screen
            name="DrawerNavigation"
            component={DrawerNavigation}
            options={{headerShown=false}} 
          />

        </Stack.Navigator>
    )
}