import React from "react";
import {
    TextInput,
    Button
} from 'react-native-paper'
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import styles from "./style";
import { View , Keyboard, Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { storage } from "../../config/firebaseConfig";
import { addProduto } from "../../controller/produtosController"; 


export default function addProdutos (){ 
    const [selectedImage, setSelectedImage] = React.useState(null);
    const [nmProduto, setNmProduto] = React.useState(null)
    const [precoCompra,setPrecoCompra] = React.useState(null)
    const [precoVenda,setPrecoVenda] = React.useState(null)
    const [categoria,setCategoria] = React.useState(null)
    const [marca, setMarca] = React.useState(null)
    const [uploading,setUploading] = React.useState(false)
    const [urlUpload,setUrlUpload] = React.useState(null)
    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        
        if (permissionResult.granted === false) {
          alert("Permissão para galeria é necessaria");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality:1,
        });
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
            //Produtos(selectedImage,1)
            //adicionarImagem()
            return <Image style={styles.imgProduto} source={{
                uri: selectedImage.localUri
                }} />
          }
      }

      async function adicionarImagem(){
        if(verificarCampos()){
            var local = selectedImage.localUri
            limparCampos()
            const uri = await uploadImageAsync(local)
            setUrlUpload(uri)
            
            
        }
      }
    function limparCampos(){
        setSelectedImage(null)
        setNmProduto(null)
        setMarca(null)
        setCategoria(null)
        setPrecoCompra(null)
        setPrecoVenda(null)
    }
    function verificarCampos(){
        if(nmProduto == null 
           || marca == null
           || categoria == null
           || precoCompra == null
           || precoVenda == null
           || selectedImage == null ){
            alert("Os campos precisam estar todos preenchidos")
            return false
           }else{
            return true
           }
    }

      async function uploadImageAsync (uri){
          const blob = await new Promise((resolve,reject) =>{
              const xhr = new XMLHttpRequest();
              xhr.onload = function () {
                  resolve(xhr.response)
              }
              xhr.onerror = function (e) {
                  console.log(e)
                  reject(new TypeError("Network Request Error"))
              }
              xhr.responseType = "blob"
              xhr.open("GET", uri,true),
              xhr.send(null)
          })
          const imageNameBefore = uri.split('/');
          const imageName = imageNameBefore[imageNameBefore.length - 1];
          const fileRef = storage.ref().child(`imagess/${imageName}`);
          const snapshot = await fileRef.put(blob);
            // We're done with the blob, close and release it
            blob.close();

            const url = await snapshot.ref.getDownloadURL()
            addProduto(nmProduto,marca,categoria,precoCompra,precoVenda,url)
            return url;
      }



    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()} style={{height:'100%'}}>
            
            <View style={styles.container}>
                <View style={styles.boxImg}>
                    <GetImage/>
                    <View style={styles.btnGetImg}>
                    <Button style={styles.btn} icon="archive-arrow-up" mode="contained" onPress={() =>{ openImagePickerAsync()}}>
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
                                    onChangeText={nmProduto => setNmProduto(nmProduto)}
                                    value={nmProduto}
                                    />
                    </View>
                    <View style={styles.mcProd}>
                        <TextInput 
                            mode='outlined'
                            label="Marca"
                            style={styles.Inputs}
                            onChangeText={marca => setMarca(marca)}
                            value={marca}
                        />
                    </View>
                </View>
                <View style={styles.inputProd}>
                    
                    <View style={styles.ctProd}>
                        <TextInput 
                            mode='outlined'
                            label="Categoria"
                            style={styles.Inputs}
                            onChangeText={categoria => setCategoria(categoria)}
                            value={categoria}
                        />
                    </View>
                    <View style={styles.precoCompProd}>
                        <TextInput 
                                    mode='outlined'
                                    label="Compra"
                                    style={styles.Inputs}
                                    onChangeText={precoCompra => setPrecoCompra(precoCompra)}
                                    value={precoCompra}
                                    keyboardType="decimal-pad"
                                    
                                />
                    </View>
                    <View style={styles.precoVenProd}>
                        <TextInput 
                                    mode='outlined'
                                    label="Venda"
                                    style={styles.Inputs}
                                    onChangeText={precoVenda => setPrecoVenda(precoVenda)}
                                    value={precoVenda}
                                    maxLength={7}
                                    keyboardType="decimal-pad"
                                />
                    </View>
                    
                </View>
                
                <View style={styles.btnEnviar}>
                <Button style={styles.btn} icon="content-save" mode="contained" onPress={() =>{ adicionarImagem()}}>
                        Salvar Produto
                    </Button>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}