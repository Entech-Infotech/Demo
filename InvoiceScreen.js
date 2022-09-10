import React, { useState, useRef, useContext, useEffect } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    TextInput,
    FlatList,Image
} from 'react-native';
import { FontAwesome, Fontisto, Ionicons } from '@expo/vector-icons';

const InvoiceScreen = () => {
    const [search, setSearch] = useState('')
    const data = [
        { id: '1', ClientName: 'Study', InvoiceNo: '0000', Sr: '1111', Amount: '10.0' },
        { id: '2', ClientName: 'Work', InvoiceNo: '0000', Sr: '1111', Amount: '10.0' },
        { id: '3', ClientName: 'Personal', InvoiceNo: '0000', Sr: '1111', Amount: '10.0' },
        { id: '4', ClientName: 'Shopping', InvoiceNo: '0000', Sr: '1111', Amount: '10.0' },
        { id: '5', ClientName: 'Misc', InvoiceNo: '0000', Sr: '1111', Amount: '10.0' },
    ]
    const color = [
        { borderColor: '#C3D8EF', backgroundColor: '#E2ECF8' },
        { borderColor: '#EEC3D9', backgroundColor: '#FAE0EE' },
        { borderColor: '#D4E8CE', backgroundColor: '#E2F0E0' },
        { borderColor: '#F5E9A3', backgroundColor: '#FFF5CC' },
        { borderColor: '#DFD4F2', backgroundColor: '#F3E5FF' },

    ]
    return (
        <View style={[styles.container]}>
            <View floatingLabel style={[styles.SearchInput, { paddingVertical: 3, paddingHorizontal: 10 }]}>
                <Ionicons name="search-outline" size={20} color="#4c164d" />
                <TextInput
                    style={{ paddingVertical: 5, width: '90%', marginLeft: 5 }}
                    // value={search}
                    // onChangeText={text => { setSearch(text); }}
                    placeholder='Search...'
                // placeholderTextColor='#fff'
                />
            </View>
            <View style={[styles.ListContainer]}>
                <Text style={{ color: '#fff', fontSize: 12, alignSelf: 'center', flex: 0.2 }}>Sr</Text>
                <Text style={{ color: '#fff', fontSize: 12, alignSelf: 'center', flex: 0.25 }}>Invoice No.</Text>
                <Text style={{ color: '#fff', fontSize: 12, alignSelf: 'center', flex: 0.25 }}>Client Name</Text>
                <Text style={{ color: '#fff', fontSize: 12, alignSelf: 'center', flex: 0.25 }}>Amount</Text>
            </View>
            {/* <FlatList
                data={data}
                // style={{ paddingHorizontal: 10 }}
                renderItem={({ index, item }) => {
                    return (
                        <TouchableOpacity style={styles.ListItemText}>
                            <Text style={{ flex: 0.25 }}>  {item.ClientName}</Text>
                            <Text style={{ flex: 0.25 }}>  {item.InvoiceNo}</Text>
                            <Text style={{ flex: 0.25 }}>  {item.Sr}</Text>
                            <Text style={{ flex: 0.25 }}>  {item.Amount}</Text>
                            <Ionicons name="ellipsis-vertical-sharp" size={20} style={{ marginTop: 2, color: '#000' }} />
                        </TouchableOpacity>
                    )
                }}

            /> */}
            <View style={[styles.imageContainer]}>
                <Image
                    source={require('./assets/Alone-pana.png')}
                    style={{height:'80%',width:'100%',resizeMode:'contain'}}
                />
                <Text style={{fontSize:25,textAlign:'center',color:'#4c164d'}}>No Data Found</Text>
            </View>

            <View style={[styles.ListContainer, { justifyContent: 'flex-end', paddingHorizontal: 15, alignSelf: 'flex-start', width: '80%' }]}>
                <Text style={{ color: '#fff', fontSize: 15, alignSelf: 'center', textAlign: 'center' }}>Total:  </Text>
                <Text style={{ color: '#fff', fontSize: 15, alignSelf: 'center' }}>8.0</Text>
            </View>
            <TouchableOpacity style={[styles.plusButton, styles.shadowbtn]}>
                <Fontisto name="plus-a" size={20} style={{ marginTop: 2, color: '#FFF' }} />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({

    container: {
        // justifyContent: 'space-evenly',
        padding: 10,
        flex: 1,
        backgroundColor: '#f4f4f4'
    },
    ListContainer: {
        backgroundColor: '#4c164d',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        paddingVertical: 20,
        marginTop: 10
    },
    plusButton: {
        backgroundColor: '#4c164d',
        width: 75,
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#fff',
        // borderWidth:2,
        borderRadius: 50,
        borderWidth: 1,
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 10,
        // right: '10px',
        // marginRight:'1%'
    },
    shadowbtn: {
        shadowOffset: { width: 1, height: 10 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        // elevation: 15,
    },
    SearchInput: {
        borderWidth: 1,
        borderRadius: 40,
        marginTop: 30,
        backgroundColor: '#f7f6f9',
        borderColor: '#4c164d',
        color: '#000000',
        flexDirection: 'row',
        alignItems: 'center'
    },
    ListItemText: {
        padding: 10,
        borderTopWidth: 5,
        borderColor: '#aa99cc',
        borderRadius: 8,
        backgroundColor: '#DFD4F2',
        // backgroundColor: '#4c164dA1',
        // width: '50%'
        marginTop: 5,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imageContainer: {
        width: '100%',
        height: '65%',
        // resizeMode: 'contain'
    },
})
export default InvoiceScreen