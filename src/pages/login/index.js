import React from "react";
import { Image, Keyboard, Text, TouchableOpacity, TouchableOpacityBase, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import {
    TextInput,
    HelperText,
    Button
} from 'react-native-paper'
import styles from "./style";
import {useFonts} from 'expo-font'
export default function Login({navigation}){
    const [usuario, setUsuario] = React.useState(null)
    const [senha, setSenha] = React.useState(null)
    let [fontsLoaded] = useFonts({
        'quicksand': require('../../assets/fonts/Quicksand-Light.ttf'),
      });

    return(
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()} style={{height:'100%'}}>
            <View style={styles.container}>
                <View style={styles.logoBox}>
                <Image source={require('../../assets/logo.png')} style={styles.logo}/>
                </View>
                <View style={styles.inputBox}>
                    <TextInput 
                        mode='outlined'
                        keyboardType='email-address'
                        textContentType='emailAddress'
                        label="Usuário"
                        style={styles.authInputs}
                        onChangeText={usuario => setUsuario(usuario)}
                        value={usuario}/>
                        <TextInput 
                        mode='outlined'
                        label="Senha"
                        
                        onChangeText={senha => setSenha(senha)}
                        value={senha}
                        />
                        <TouchableOpacity 
                        style={{alignItems:'center'}}>
                            <Text>Não possui conta? Cadastre-se Aqui</Text>
                        </TouchableOpacity>
                        <Button 
                        style={styles.btnEntrar}
                        labelStyle={styles.btnEntrarContent}
                        mode="contained" 
                        onPress={()=>navigation.navigate("NavigationDrawer")}>
                            Entrar
                        </Button>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )

}