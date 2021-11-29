import {StyleSheet} from 'react-native'
import colors from '../../styles/colors'

const styles = StyleSheet.create({
    containerItem:{
        display: 'flex',
        flexDirection: 'column', 
    },
    produtoLista:{
        width:"30%",
        height:180,
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
        width:"100%",
        height:"65%",
        borderTopRightRadius:13,
        borderTopLeftRadius:13,
        backgroundColor:"#000"
    },
    produtoImg:{
        borderColor:"#000",
        borderTopLeftRadius:12,
        borderTopRightRadius:12,
        width:"100%",
        height:"100%",
    },
    produtoListaTitulo:{
        alignItems:'center',
        width:'100%',
        height: 15,
        bottom:-5
    },
    produtoListaTituloText:{
        fontSize:15,
    },
    produtoListaPreco:{
        width:45,
        height:15,
        position:'relative',
        alignSelf:'flex-end',
        right:4,
        bottom:-5


    },
    produtoListaPrecoText:{
        fontSize:12,
    },
    produtoListaBtnView:{
        flexDirection:'row',
        alignSelf:'flex-end',
        bottom:-8
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
        borderTopLeftRadius:12,
    },
})

export default styles