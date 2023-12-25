import { View, Text } from "react-native"
import BottomMenu from "../components/BottomMenu"
import { useEffect } from "react"
import { Styles } from "../cssstyles"


export default AccountScreen = () =>{

    useEffect(() => {

    },[])

    return <View style={Styles.ViewStyle}>
        <Text>
            Account Screen
        </Text>
        <BottomMenu menuname={'account'}/>
    </View>
}