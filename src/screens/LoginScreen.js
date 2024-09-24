
import { useContext, useEffect, useState, useRef } from "react"
import { useNavigation } from "@react-navigation/native" // Import the useNavigation hook
import {
    View, Text, TextInput, StyleSheet, Button, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity
} from "react-native"

import AppStoreConext from "../StoreContext/AppContextProvider";
import { postApi } from "../../services/storeService";
import { loginPath } from "../../services/services";
import Register from "../components/Register";

export default LoginScreen = () => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('');
    const userNameRef = useRef(null);

    const { data, addValue } = useContext(AppStoreConext)
    const navigation = useNavigation(); // Initialize the navigation object

    useEffect(() => {
        userNameRef.current.focus();
    }, [])

    const VerifyName = (e) => {
        setUserName(e)
    }

    const VerifyPass = (e) => {
        setPassword(e)
    }


    async function onSubmit() {

        let msg = '';
        if (!userName) {
            msg = 'Please enter your login.';
            console.log('userName', userName);
        } else if (!password) {
            msg = 'Please enter your password.';
        } else if (!userName && !password) {
            msg = 'Please enter your login and password.';
        }
        setMessage(msg);

        let profileModal = {
            mailId: 'userName',
            Password: 'password',
            PhoneNumber: '9901351374'
        };

        const data = await postApi(loginPath, profileModal);

        // Redirect to home screen after successful login
        if (data) {
            addValue(data);
            navigation.navigate('Home'); // Replace 'Home' with the name of your home screen component
        }
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
                        ref={userNameRef}
                        
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
                    {message && <Text style={Styles.messageStyle}>{message}</Text>}
                    {/* Register Component */}
                    <Register />
                </View>
            </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    messageStyle:{
        color: 'red',
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold',
        marginBottom: 10
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