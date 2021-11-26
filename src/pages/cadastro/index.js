import React from "react";
import { Image, Keyboard, Text, TouchableOpacity, TouchableOpacityBase, View} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import {
    TextInput,
    HelperText,
    Button
} from 'react-native-paper'
import { TextInputMask } from 'react-native-masked-text';
import styles from "./style";
import {useFonts} from 'expo-font'
import { addUser } from "../../controller/usuarioController";

export default function Cadastro({navigation}){
    const [usuario, setUsuario] = React.useState(null)
    const [senha, setSenha] = React.useState(null)
    const [nome, setNome] = React.useState(null)
    const [telefone,setTelefone] = React.useState(null)
    

    function cadastrar(){
        if(usuario == null || usuario=="" || senha == null || senha =="" || nome == null || nome =="" || telefone == null || telefone == ""){
            alert("Você precisa preencher todos os campos")
        }else{
            addUser({navigation},usuario,senha,nome,telefone,0)
        }
    }
    return(
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()} style={{height:'100%'}}>
            <View style={styles.container}>
                <View style={styles.logoBox}>
                <Image source={require('../../assets/imgs/logo.png')} style={styles.logo}/>
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
                        textContentType='newPassword'
                        label="Senha"
                        secureTextEntry
                        onChangeText={senha => setSenha(senha)}
                        value={senha}
                        />
                        <TextInput 
                        mode='outlined'
                        textContentType='name'
                        label="Nome"
                        style={styles.authInputs}
                        onChangeText={nome => setNome(nome)}
                        value={nome}/>
                        <TextInput 
                        mode='outlined'
                        textContentType='telephoneNumber'
                        keyboardType='phone-pad'
                        
                        label="Telefone"
                        style={styles.authInputs}
                        onChangeText={telefone => setTelefone(telefone)}
                        value={telefone}
                        render={props => 
                                <TextInputMask
                                {...props}
                                type="cel-phone"/>
                            }/>
                        <Button 
                        style={styles.btnEntrar}
                        labelStyle={styles.btnEntrarContent}
                        mode="contained" 
                        onPress={()=>cadastrar()}>
                            Cadastrar
                        </Button>
                </View>
                
            </View>
        </TouchableWithoutFeedback>
    )

}