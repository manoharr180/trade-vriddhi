import { View, StyleSheet, TouchableOpacity } from "react-native"
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

export default BottomMenu = ({menuname}) =>{
    
    console.log(menuname)
    const navigation = useNavigation()

    return <View style={Styles.menuItems}>
        <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
        <Feather name="home" size={28} color={menuname == 'home' ? 'red': 'black'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate('Account')}}>
        <Feather name="user" size={28} color={menuname == 'account' ? 'red': 'black'} />
        </TouchableOpacity >
        <TouchableOpacity onPress={() => {navigation.navigate('Cart')}}>
        <Feather name="shopping-bag" size={28} color={menuname == 'cart' ? 'red': 'black'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate('Menu')}}>
        <Feather name="menu" size={28} color={menuname == 'menu' ? 'red': 'black'} />
        </TouchableOpacity>
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