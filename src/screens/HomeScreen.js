import React, { useEffect, useState } from "react";
import {  View, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import { fetchApi } from "../../services/storeService";
import { profilePath } from "../../services/services";
import Products from "../components/products";
import BottomMenu from "../components/BottomMenu";
import { Styles } from "../cssstyles";


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
        <BottomMenu menuname={'home'}/>
    </View>
}



export default HomeScreen


