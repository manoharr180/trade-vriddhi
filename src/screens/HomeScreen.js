import React, { useEffect, useState } from "react";
import {  View, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import { fetchApi } from "../../services/storeService";
import { profilePath } from "../../services/services";
import Products from "../components/products";
import BottomMenu from "../components/BottomMenu";



const HomeScreen =  () =>{

    const [results, setResults] = useState([]);

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
        {/* <Products  results={results}/>
        <Products  results={results}/>
        <Products  results={results}/>
        <Products  results={results}/> */}
        </ScrollView>
        <BottomMenu/>
    </View>
}

const Styles = StyleSheet.create({
    ViewStyle:{
        // marginLeft:15,
        paddingHorizontal:10,
        backgroundColor:'#FFFFFF',
        borderBottomWidth:4,
        flex:1
    }
})

export default HomeScreen


