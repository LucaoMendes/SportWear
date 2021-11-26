import { StyleSheet } from "react-native";
import colors from '../../styles/colors'
const styles = StyleSheet.create({
    hr:{
        borderBottomColor: 'black',
        borderBottomWidth: 0.2,
        width:"95%",
        alignSelf:'center'
    },
    headerDrawerContainer:{
        flex:1,
        flexDirection:"column",
        backgroundColor: colors.backgroundDrawerHeaderContainer,
        height:220, 
        top:-5,
        justifyContent:'center',
        alignItems:'center',
        width:'100%'
    },
    userInfo:{
        color:colors.textPrimaryColor
    }
})
export default styles