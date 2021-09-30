import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import database, {userAuth} from './src/config/firebaseConfig'
import {loginUser,logoutUser,addUser,getUserInfo} from './src/controller/usuarioController';
import {getFiliais} from './src/controller/filialController'
export default function App() {
    const [userinfo, setuserinfo] = useState(getUserInfo())
    filiais = getFiliais()
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{
          
          console.log(filiais)
      }}>
      <Text>Conectarr
        {JSON.stringify(getUserInfo())
          }
      </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        logoutUser()
        setuserinfo(getUserInfo())
      }}>
      <Text>Sair
      </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});