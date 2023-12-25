import { View, Text } from "react-native"
import BottomMenu from "../components/BottomMenu"
import { useEffect } from "react"
import { Styles } from "../cssstyles"

export default CartScreen = () =>{
    useEffect(() => {

    },[])

    return <View style={Styles.ViewStyle}>
        <Text>
            Cart Screen
        </Text>
        <BottomMenu menuname={'cart'}/>
    </View>
}