import {StyleSheet} from 'react-native'
import colors from '../../styles/colors'

const styles = StyleSheet.create({
    containerItem:{
        display: 'flex',
        flexDirection: 'column', 
        height:"100%",
    },
    boxItens:{
        width:"50%",
        height:"100%",
        flexDirection: 'column'
    },
    produtoLista:{
        width:"96%",
        height:160,
        flexDirection: 'row',
        borderRadius:13,
        marginHorizontal:"1.66%",
        marginTop:6,
        marginBottom:10,
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
        width:"50%",
        height:"100%",
        borderTopLeftRadius:13,
        borderBottomLeftRadius:13,
        backgroundColor:"#000"
    },
    produtoImg:{
        width:"100%",
        height:"100%",
        borderTopLeftRadius:12,
        borderBottomLeftRadius:12,
    },
    produtoListaTitulo:{
        alignItems:'center',
        width:'100%',
        height: 15,
        top:10,
    },
    produtoListaTituloText:{
        fontSize:16,
    },
    produtoListaPreco:{
        alignItems:'flex-end',
        position:'absolute',
        bottom:10,
        left:10,
        height:15,

    },
    produtoListaPrecoText:{
        fontSize:16,
    },
    produtoListaBtnView:{
        flexDirection:'row',
        alignSelf:'flex-end',
        position:'absolute',
        bottom:0
    },
    produtoListaBtnCarrinho:{
        marginHorizontal:5,
        right:-5,
        height:25,
        width:56,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black',
        borderBottomRightRadius:12,
        borderTopLeftRadius:12
    }
})

export default styles