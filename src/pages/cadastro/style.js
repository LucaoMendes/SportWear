import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:colors.primaryBackgroundAppColor,
            justifyContent:'center'
        },
        logo:{
            height:200,
            width:'85%'
        },
        logoBox:{
            alignItems:'center'
        },
        authInputs:{
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
        inputBox:{
            marginHorizontal:25
        },
        btnEntrar:{
            marginTop:20,
            backgroundColor:colors.btnEntrarBackgroundColor,
        },
        btnEntrarContent:{
            color:colors.btnEntrarLabelColor,
        }
    }
)
export default styles