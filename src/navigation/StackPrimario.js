import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/login'
const Stack = createStackNavigator()

export default function StackPrimario(){
    return(
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
          />
        </Stack.Navigator>
    )
}