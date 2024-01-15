import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Pressable,
    TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native"

export default RegisterScreen = () =>{
    return <ScrollView>
    <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={Styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{marginHorizontal:5}}>
        <Text style={Styles.label}>Enter Details</Text>
        <TextInput style={Styles.inputStyle} placeholder="First Name"/>
        <TextInput style={Styles.inputStyle} placeholder="Last Name"/>
        <TextInput style={Styles.inputStyle} placeholder="Mobile"/>
        <TextInput style={Styles.inputStyle} placeholder="Mail Id"/>
        <TextInput style={Styles.inputStyle} textContentType='password' placeholder="Password"/>
        <TextInput style={Styles.inputStyle} placeholder="Re-enter password"/>
        <Pressable style={Styles.button} >
            <Text style={{fontWeight:'bold', fontSize:18, color:'white'}}>Submit</Text>
        </Pressable>
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </ScrollView>
}

const Styles =  StyleSheet.create({
    container:{
        flex:1,
        flexGrow:'true'
    },
    button:{
        flexDirection:'row',
        borderColor:'red', 
        borderWidth:1, 
        backgroundColor:'#d23c4b',
        alignItems:'center',
        borderRadius:5,
        alignContent:'center',
        alignSelf:'center',
        paddingVertical:12,
        paddingHorizontal:12,
        borderColor:'grey'
    },
    label:{
        padding:5,
        fontSize:20,
        borderColor: '#000000',
        borderBottomWidth: 1,
        marginVertical: 36,   
    },
    inputStyle :{
        padding:5,
        fontSize:20,
        backgroundColor:'#F0EFEE',
        height: 50,
        borderColor: '#000000',
        borderBottomWidth: 1,
        marginBottom: 36,   
    }
})