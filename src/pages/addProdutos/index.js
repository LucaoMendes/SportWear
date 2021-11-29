import React from "react";
import {
    TextInput,
    HelperText,
    Button
} from 'react-native-paper'
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import styles from "./style";
import { View , Keyboard, Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import storage from '@react-native-firebase/storage';

export default function addProdutos (){ 
    const [selectedImage, setSelectedImage] = React.useState(null);
    const [produto, setProduto] = React.useState(null)
    const [preco,setPreco] = React.useState(null)

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permissão para galeria é necessaria");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled === true) {
            return;
          }
        setSelectedImage({ localUri: pickerResult.uri })
        console.log(pickerResult);
        console.log(selectedImage)
      }

      function GetImage(){
          if(selectedImage == null){
            return <Image style={styles.imgProduto} source={require('../../assets/imgs/sapatos/01.jpg')} />
          }else{
            return <Image style={styles.imgProduto} source={{
                uri: selectedImage.localUri,
                }} />
          }
      }
    
    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()} style={{height:'100%'}}>
            
            <View style={styles.container}>
                <View style={styles.boxImg}>
                    <GetImage/>
                    <View style={styles.btnGetImg}>
                    <Button icon="archive-arrow-up" mode="contained" onPress={() =>{ openImagePickerAsync()}}>
                        Escolher Arquivo
                    </Button>
                    </View>
                </View>
                <View style={styles.inputProd}>
                    <View style={styles.nmProd}>
                        <TextInput 
                                    mode='outlined'
                                    label="Nome do Produto"
                                    style={styles.Inputs}
                                    onChangeText={produto => setProduto(produto)}
                                    value={produto}/>
                    </View>
                    <View style={styles.pcProd}>
                        <TextInput 
                                    mode='outlined'
                                    label="Preço"
                                    style={styles.Inputs}
                                    onChangeText={preco => setPreco(preco)}
                                    value={preco}
                                    keyboardType="decimal-pad"
                                />
                    </View>
                </View>
                
                <View style={styles.btnEnviar}>
                <Button icon="content-save" mode="contained" onPress={() =>{ openImagePickerAsync()}}>
                        Salvar Produto
                    </Button>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}