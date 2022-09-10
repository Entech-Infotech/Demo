import React, { useState, useRef, useContext, useEffect } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    TextInput,
    FlatList,
    Dimensions
} from 'react-native';
import { FontAwesome, Fontisto, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const CreateInvoiceScreen = () => {
    return (
        <View style={[styles.container]}>
            <View style={[styles.ListContainer]}>
                <View style={{ flexDirection: 'row' }}>
                    <MaterialCommunityIcons name="calendar-month-outline" size={22} color={'#4c164d'} />
                    <Text>  28-08-2022</Text>
                </View>
                <View style={[styles.TextInput, { width: '50%' }]}>
                    <TextInput placeholder="General"></TextInput>
                </View>
            </View>
            <View>
                <TextInput style={[styles.TextInput]} placeholder="General"></TextInput>
                <TextInput style={[styles.TextInput]} placeholder="Ahmedabad"></TextInput>
                <TextInput style={[styles.TextInput]} placeholder="Joe Doe"></TextInput>
                <TextInput style={[styles.TextInput]} placeholder="Select Client"></TextInput>
            </View>
            {/* {continue button} */}
            <View style={{ marginTop: 10 }}>
                <TouchableOpacity style={[styles.AddButton, styles.shadowbtn]}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                        <Fontisto name="plus-a" size={20} style={{ color: '#fff' }} />
                        <Text style={{ color: '#fff', fontSize: 18 }}>  Add Item</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={[styles.ListContainerFooter]}>
                <Text style={{ color: '#fff', fontSize: 15, alignSelf: 'center' }}>Round Off(+/-)</Text>
                <Text style={{ color: '#fff', fontSize: 15, alignSelf: 'center' }}>0</Text>
                <Text style={{ color: '#fff', fontSize: 15, alignSelf: 'center' }}>Net</Text>
                <Text style={{ color: '#fff', fontSize: 15, alignSelf: 'center' }}>0</Text>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        // justifyContent: 'space-evenly',
        padding: 10,
        flex: 1
    },
    ListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
        alignItems: 'center'
    },
    TextInput: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#4c164d',
        borderRadius: 8,
        // width: '50%'
        marginTop: 15
    },
    AddButton: {
        alignSelf: 'center',
        backgroundColor: '#4c164d',
        width: Dimensions.get('window').width / 2,
        justifyContent: 'center',
        padding: 10,
        borderColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
    },
    shadowbtn: {
        shadowOffset: { width: 1, height: 10 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
    },
    ListContainerFooter: {
        backgroundColor: '#4c164d',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        paddingVertical: 20,
        marginTop: 10,
        bottom: 10,
        position: 'absolute',
        width: '100%',
        alignSelf: 'center'
    },
})
export default CreateInvoiceScreen