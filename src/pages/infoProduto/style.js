import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    imageBox:{
        margin:10,
        borderRadius:13,
        height:'50%',
        alignItems:"center",
        shadowColor:"#000",
            shadowOffset:{
                width:0,
                height:2,
            },
            shadowOpacity:0.25,
            shadowRadius: 3.84,
            elevation:3,
    },
    image:{
        height:'100%',
        borderRadius:12,
        width:"100%"

    },
    productTitle:{
        margin:5,
    },
    productTitleText:{
        fontSize:45,
    },
    productValue:{
        margin:5,
        
    },
    productValueText:{
        fontSize:30,
    },
    productCategoView:{
        position:"absolute",
        top:0,
        left:0,
        backgroundColor:"grey",
        height:50,
        width:100,
        justifyContent:'center',
        alignItems:'center',
        borderTopLeftRadius:12,
        borderBottomRightRadius:12,
    },
    productCategoText:{
        color:"white"
    }
})

export default styles;