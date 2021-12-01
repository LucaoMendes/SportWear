import { StyleSheet } from "react-native";
import  colors  from '../../styles/colors'
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        height:'100%',
        backgroundColor:colors.primaryBackgroundAppColor,
    },
    boxImg:{
        height:"45%",
        alignItems:'center'

    },
    imgProduto:{
        justifyContent:'center',
        alignItems:"center",
        marginTop:10,
        height:"75%",
        width:"80%",
        backgroundColor:'black',
        borderRadius:13,
    },
    btnGetImg:{
        height:"15%",
        justifyContent:'center',
        margin:"2.5%",
        width:"45%",
    },
    inputProd :{
        marginHorizontal:10,
        marginVertical:5,
        justifyContent:'center',
        height:75,
        flexDirection:"row"
    },
    nmProd:{
        marginRight:'2.5%',
        width:'47.5%',
    },
    precoCompProd:{
        width:"25%",
        marginRight:"2.5%",
        marginLeft:"2.5%"
    },
    precoVenProd:{
        width:"25%",
        marginLeft:"2.5%"
    },
    btnEnviar : {
        width:'45%',
        alignSelf:'center',
        marginHorizontal:10,
        marginVertical:5,
        justifyContent:'center',
        height:75,
    },Inputs:{
        backgroundColor:colors.inputBackgroundColor,
        height:55,
        shadowColor:'#000',
        shadowOffset:{
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation:4,
    },
    mcProd:{
        marginLeft:'2.5%',
        width:'47.5%',
    },
    ctProd:{
        marginRight:'2.5%',
        width:'40%',
    },
    btn:{
        backgroundColor:colors.btnEntrarBackgroundColor
    }
});
export default styles