import { View, Text, StyleSheet } from "react-native"
import { FontAwesome, Feather } from '@expo/vector-icons';

export default BottomMenu = () =>{
    return <View style={Styles.menuItems}>
        <Feather name="home" size={28} color="black" />
        <Feather name="user" size={28} color="black" />
        <Feather name="shopping-bag" size={28} color="black" />
        <Feather name="menu" size={28} color="black" />
    </View>
}


const Styles = StyleSheet.create({
    menuItems:{
        flexDirection:'row',
        borderTopWidth:1,
        borderColor:'grey',
        marginVertical:20,
        paddingVertical:10,
        paddingHorizontal:1,
        alignContent:'space-between',
        justifyContent:'space-evenly',
        

    }
})