import React from "react";
import {  View, StyleSheet, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons';

const SearchBar = () =>{

    return <View style={Styles.backGroundStyle}>
        <TextInput style={Styles.inputStyle} placeholder='Search'/>
        <Feather style={Styles.iconStyle} name="search" size={24} color="black" />
    </View>
}

const Styles = StyleSheet.create({
    backGroundStyle:{
        backgroundColor:'#F0EEEF',
        marginTop:10,
        height:50,
        flexDirection:'row',
        borderRadius:5,
        // marginHorizontal:10,
        alignSelf:"center",
        marginBottom:5
    },
    inputStyle:{
        paddingHorizontal:5,
        borderColor:'black',
        flex:1,
        fontSize:18
    },
    iconStyle:{
        alignSelf:'center',
        marginHorizontal:15,
        paddingRight:5,
        borderColor:'black'
    }

})

export default SearchBar


