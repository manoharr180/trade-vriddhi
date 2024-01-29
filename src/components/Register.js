import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native';

export default Register = () => {

    const navigation = useNavigation();

    return <View style={{ flexDirection: 'row', marginVertical: 10, paddingVertical: 5, alignItems: 'flex-end' }}>
        <Text style={{ color: 'grey' }}>Not a member?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{ color: 'blue' }}> Register Now</Text>
        </TouchableOpacity>
    </View>
}