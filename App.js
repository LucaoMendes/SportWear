import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import database, {userAuth} from './src/config/firebaseConfig'
import {loginUser,logoutUser,addUser,getUserInfo} from './src/controller/usuarioController';
export default function App() {
    const [userinfo, setuserinfo] = useState(getUserInfo())
    filial = {
      enderecoFilial:'Rua Tal',
      nomeFilial:"Principal",
      estoque:{
        1:{
          produtoId:'OkYt5yY29qaHKJJo83if',
          quantidade: 10
        },
        2:{
          produtoId:'OkYt5yY29qaHKJJo83if',
          quantidade: 20
        }
      }
    }
    
    
    
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{
          
          loginUser("lucas1999mendes@gmail.com","12s3456")
          console.log(getUserInfo())
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