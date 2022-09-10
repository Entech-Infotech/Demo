import React from "react"
import { View,Text, TouchableOpacity } from "react-native"
import { Ionicons } from '@expo/vector-icons';

const BackHeader = ({navigation}) => {
    return(
        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',backgroundColor:'#4D164C',padding:10,paddingTop:0}} onPress={() => {navigation.pop()}} activeOpacity={1}>
            <Ionicons name="arrow-back-sharp" size={20} color="#FFF"/><Text style={{color:'#FFF'}}>Back</Text>
        </TouchableOpacity>
    )
}

export default BackHeader;