import {StyleSheet} from 'react-native'
import colors from '../../styles/colors'

const styles = StyleSheet.create({
    produtoLista:{
        width:"30%",
        height:130,
        borderRadius:13,
        marginHorizontal:"1.66%",
        marginTop:6,
        marginBottom:6,
        backgroundColor:colors.secondaryBackgroundAppColor,
        shadowColor:"#000",
            shadowOffset:{
                width:0,
                height:2,
            },
            shadowOpacity:0.25,
            shadowRadius: 3.84,
            elevation:3,
    },
    produtoListaImagem:{
        alignItems:'center',
        width:"100%",
        height:"56.92%",
        backgroundColor:"#000"
    },
    produtoListaTitulo:{
        alignItems:'center',
        backgroundColor:'grey',
        width:'100%',
        height: 15,
    },
    produtoListaTituloText:{
        fontSize:11,
    },
    produtoListaPreco:{
        width:45,
        height:15,
        backgroundColor:'red',
        position:'relative',
        alignSelf:'flex-end',
        right:4,


    },
    produtoListaPrecoText:{
        fontSize:11,
    },
    produtoListaBtnView:{
        backgroundColor:'grey',
        flexDirection:'row',
        alignSelf:'flex-end',
        bottom:-10
    },
    produtoListaBtnCarrinho:{
        marginHorizontal:5,
        height:28,
        width:28,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black',
        
        padding:5,
        borderRadius:100
    },
    produtoListaBtnInfo:{
        marginHorizontal:5,
        height:28,
        width:28,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black',
        
        padding:5,
        borderRadius:100
    }
})

export default styles