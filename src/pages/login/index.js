import React, { useEffect } from "react";
import { Image, Keyboard, Text, TouchableOpacity, TouchableOpacityBase, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import {
    TextInput,
    Snackbar,
    Button
} from 'react-native-paper'
import styles from "./style";
import {useFonts} from 'expo-font'
import { loginUser , isLoggedIn, logoutUser } from "../../controller/usuarioController";

export default function Login({route , navigation}){
    const [usuario, setUsuario] = React.useState(null)
    const [senha, setSenha] = React.useState(null)
    const [visibleSnack , setVisibleSnack] = React.useState(false)
    const onToggleSnackBar = ()=> setVisibleSnack(!visibleSnack)
    const onDismissSnackBar = () => setVisibleSnack(false)
    
    
    useEffect(()=>{
        if(route.params)
            if(route.params.cadastro)
                onToggleSnackBar()
    },[route])
    
    let [fontsLoaded] = useFonts({
        'quicksand': require('../../assets/fonts/Quicksand-Light.ttf'),
      });


    function logar(){
        if(usuario == null || usuario=="" || senha == null || senha ==""){
            alert("Você precisa preencher todos os campos")
        }else{
            loginUser(usuario,senha,{navigation})
        }
    }

    
    return(
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()} style={{height:'100%'}}>
             
            <View style={styles.container}>
            <Snackbar
                visible={visibleSnack}
                onDismiss={onDismissSnackBar}
                style={{borderRadius:25,bottom:10}}
                wrapperStyle={{alignContent:'center'}}
                >
                Cadastro concluido com sucesso!
            </Snackbar>
                <View style={styles.logoBox}>
                    <Image source={require('../../assets/logo.png')} style={styles.logo}/>
                </View>
                <View style={styles.inputBox}>
                    <TextInput 
                        mode='outlined'
                        keyboardType='email-address'
                        textContentType='emailAddress'
                        label="Email"
                        style={styles.authInputs}
                        onChangeText={usuario => setUsuario(usuario)}
                        value={usuario}/>
                        <TextInput 
                        mode='outlined'
                        label="Senha"
                        textContentType='password'
                        secureTextEntry
                        onChangeText={senha => setSenha(senha)}
                        value={senha}
                        />
                        <TouchableOpacity 
                        style={{alignItems:'center'}}
                        onPress={()=>navigation.navigate("Cadastro")}>
                            <Text>Não possui conta? Cadastre-se Aqui</Text>
                        </TouchableOpacity>
                        <Button 
                        style={styles.btnEntrar}
                        labelStyle={styles.btnEntrarContent}
                        mode="contained" 
                        onPress={()=>logar()}>
                            Entrar
                        </Button>
                        
                </View>
            </View>
           
        </TouchableWithoutFeedback>
    )

}