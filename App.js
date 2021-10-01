import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackPrimario from './src/navigation/StackPrimario'
export default class App extends React.Component  {
  render(){
  return (
    <NavigationContainer>
      <StackPrimario/>      
    </NavigationContainer>
    )
  }
}
