import { View, Text } from "react-native"
import BottomMenu from "../components/BottomMenu"
import { useEffect } from "react"
import { Styles } from "../cssstyles"

export  default MenuScreen = () =>{
    useEffect(() => {

    },[])

    return <View style={Styles.ViewStyle}>
        <Text>
            Menu Screen
        </Text>
        <BottomMenu menuname={'menu'}/>
    </View>
}