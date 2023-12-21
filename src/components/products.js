import { FlatList, View, Text, TouchableOpacity,StyleSheet} from "react-native"
import ItemDetails from "./ItemDetails"
import { useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons';

export default Products = ({results}) =>{
    const navigation = useNavigation();
    const getItemCount = (results) => 50;
    return <View>
        <TouchableOpacity onPress={() => {navigation.navigate('ItemDetailsScreen')}}>
        <View style={styles.header}>
        <Text style={styles.title}>Men's Tshirts</Text>
        <Entypo style={styles.chevronRight} name="chevron-small-right" size={30} color="black" />
        </View>
        </TouchableOpacity>
        <FlatList 
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={results}
        // numColumns={2}
        keyExtractor={result => result.id}
        renderItem={({item}) =>{
            return <TouchableOpacity onPress={() => {navigation.navigate('ItemDetailsScreen')}}>
             <ItemDetails item={item}/>
             </TouchableOpacity>
        }}
        />

<TouchableOpacity onPress={() => {navigation.navigate('ItemDetailsScreen')}}>
        <View style={styles.header}>
        <Text style={styles.title}>Women's wear</Text>
        <Entypo style={styles.chevronRight} name="chevron-small-right" size={30} color="black" />
        </View>
        </TouchableOpacity>
        <FlatList 
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={results}
        // numColumns={2}
        keyExtractor={result => result.id}
        renderItem={({item}) =>{
            return <TouchableOpacity onPress={() => {navigation.navigate('ItemDetailsScreen')}}>
             <ItemDetails item={item}/>
             </TouchableOpacity>
        }}
        />

<TouchableOpacity onPress={() => {navigation.navigate('ItemDetailsScreen')}}>
        <View style={styles.header}>
        <Text style={styles.title}>Kid's wear</Text>
        <Entypo style={styles.chevronRight} name="chevron-small-right" size={30} color="black" />
        </View>
        </TouchableOpacity>
        <FlatList 
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={results}
        // numColumns={2}
        keyExtractor={result => result.id}
        renderItem={({item}) =>{
            return <TouchableOpacity onPress={() => {navigation.navigate('ItemDetailsScreen')}}>
             <ItemDetails item={item}/>
             </TouchableOpacity>
        }}
        />
    </View>
}


const styles = StyleSheet.create({
        title:{
        fontWeight:"bold",
        fontSize:18
        },
        header:{
            flexDirection:'row',
            justifyContent:'space-between',
            alignContent:'space-between',
            marginVertical: 10,
        }
    });
