import React, { useContext, useEffect, useState } from "react";
import {  View, ScrollView, FlatList, Button, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import { fetchApi } from "../../services/storeService";
import { profilePath } from "../../services/services";
import Products from "../components/products";
import BottomMenu from "../components/BottomMenu";
import { Styles } from "../cssstyles";
import  AppStoreConext  from "../StoreContext/AppContextProvider";


const HomeScreen =  () =>{

    const [results, setResults] = useState([]);
    const {data, addValue}  = useContext(AppStoreConext)

    useEffect(() => {
        getResults()
    },[])

    const  getResults = async () =>{
        const test = await fetchApi(profilePath)
        setResults(test)
    }


    return <View style={Styles.ViewStyle}>
        <SearchBar />
        <ScrollView showsVerticalScrollIndicator={false}>
        <Products  results={results}/>
        
        </ScrollView>
        {/* <FlatList
        data={data}
        keyExtractor={item => item.title}
        renderItem={({item}) =>{
            return <Text>{item.title}</Text>
        }}
        />*/}
        <Button title="Add Item" onPress={addValue}>Add Item</Button> 
        <BottomMenu menuname={'home'}/>
    </View>
}



export default HomeScreen


