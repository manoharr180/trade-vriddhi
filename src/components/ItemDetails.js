import { View, Text, Image, StyleSheet} from "react-native"


export default ItemDetails =  ({item}) =>{
    return <View style={styles.container}>
        <Image style={styles.image} source={{uri:item.thumbnailUrl}}/>
            <Text style={styles.name}>
            {item.title}
            </Text>
            <Text style={styles.reviews}>5 Stars, 7k reviews</Text>
        </View>
}

const styles = StyleSheet.create({
    name:{
        fontWeight:'bold'
    },
    container:{
        marginRight:10,
    },
    image:{
        width:180,
        height:150,
        borderRadius:4,

    },
    reviews:{
        marginBottom:12
    }
    
})