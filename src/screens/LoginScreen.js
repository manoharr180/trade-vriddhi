import { useContext, useEffect, useState } from "react"
import {
    View, Text, TextInput, StyleSheet, Button, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity
} from "react-native"

import AppStoreConext from "../StoreContext/AppConextProvider";
import { postApi } from "../../services/storeService";
import { loginPath } from "../../services/services";
import Register from "../components/Register";

export default LoginScreen = () => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const { data, addValue } = useContext(AppStoreConext)


    const VerifyName = (e) => {
        setUserName(e)
    }

    const VerifyPass = (e) => {
        setPassword(e)
    }


    const onSubmit = async () => {
        let profileModal = {
            mailId: 'userName',
            Password: 'password',
            PhoneNumber: '9901351374'
        }

        const data = await postApi(loginPath, profileModal)
        addValue(data)

    }

    {/*<ScrollView ><View style={Styles.loginView}> */ }
    return <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={Styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={Styles.loginViewText}>
                <View style={Styles.loginView}>
                    <Text style={Styles.label}>Login</Text>
                    <TextInput
                        style={Styles.inputStyle}
                        placeholder='Username'
                        value={userName}

                        onChangeText={VerifyName}
                    />
                    <TextInput style={Styles.inputStyle}
                        placeholder='Password'
                        value={password}
                        textContentType='password'
                        secureTextEntry={true}
                        onChangeText={VerifyPass} />

                    <View style={{
                        flexDirection: 'row', justifyContent: 'center', borderColor: 'blue', borderWidth: 1,
                        borderRadius: 5
                    }}>
                        <Button title="Login" onPress={onSubmit}>Login</Button>
                    </View>

                    {/* Register Component */}
                    <Register />
                </View>
            </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

}

const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inputStyle: {
        padding: 5,
        fontSize: 20,
        backgroundColor: '#F0EFEE',
        height: 40,
        borderColor: '#000000',
        borderBottomWidth: 1,
        marginBottom: 36,

    },
    label: {
        alignSelf: 'center',
        fontSize: 25,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: 'green',
        marginBottom: 10
    },
    loginView: {
        // borderColor:'red',
        // borderWidth:5,
        padding: 5,
    },
    loginViewText: {

        // flexDirection:'column',
        // borderColor:'blue',
        // borderWidth:5,
        marginBottom: 50,
        justifyContent: 'space-around',
        padding: 24,
        flex: 1,

    }
})