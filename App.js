import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import database, {userAuth} from './src/config/firebaseConfig'
export default function App() {
    const [ filiais , setfiliais] = useState([])
    
    database.collection('produtos').onSnapshot((query) => {
      const list = []
      query.forEach((doc)=>{
        list.push({...doc.data(), id: doc.id})
      })
      setfiliais(list)
    })

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
        userAuth.signInWithEmailAndPassword('lucas1999mendes@gmail.com','123456')
        .then(console.log('connected'))
        .catch(error=>{
            if(error.code === 'auth/wrong-password'){
              console.log("senha incorreta")
            }
          })
          
          
      }}>
      <Text>Conectar
        {JSON.stringify(userAuth.currentUser ? "LOGADO" : "DESLOGADO",null,'\t')}
      </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        userAuth.signOut()
      }}>
      <Text>SAIR
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