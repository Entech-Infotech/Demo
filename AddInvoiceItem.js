import React, { useState, useRef, useContext, useEffect } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    TextInput,
    FlatList,
    Dimensions,
    ScrollView
} from 'react-native';
import { FontAwesome, Fontisto, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const AddInvoiceItem = () => {
    return (
        <View style={[styles.container]}>
            <ScrollView>
                <View style={[styles.ListContainer]}>
                    <View style={{ width: '48%', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ flex: 0.3 }}>MRP</Text>
                        <TextInput style={[styles.TextInput, { flex: 0.7 }]} placeholder="Select MRP"></TextInput>
                    </View>
                    <View style={{ width: '48%', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ flex: 0.3 }}>Stock</Text>
                        <Text style={[styles.TextInput, { flex: 0.7 }]}></Text>
                    </View>
                    {/* <View style={{ width: '50%', flexDirection: 'row' }}>
                    <Text style={{paddingVertical:20}}>Stock</Text>
                    <TextInput style={[styles.TextInput]} placeholder="Stock"></TextInput>
                </View> */}
                </View>
                <View style={[styles.ListContainer]}>
                    <View style={{ width: '48%', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ flex: 0.2 }}>Qty</Text>
                        <TextInput style={[styles.TextInput, { flex: 0.4 }]}></TextInput>
                        <TextInput style={[styles.TextInput, { flex: 0.4 }]}></TextInput>
                    </View>
                    <View style={{ width: '48%', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ flex: 0.3 }}>PCS</Text>
                        <Text style={[styles.TextInput, { flex: 0.7 }]}></Text>
                    </View>
                </View>
                <View style={[styles.ListContainer]}>
                    <View style={{ width: '48%', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ flex: 0.3 }}>TQty</Text>
                        <TextInput style={[styles.TextInput, { flex: 0.7 }]}></TextInput>
                    </View>
                    <View style={{ width: '48%', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ flex: 0.3 }}>TKG</Text>
                        <Text style={[styles.TextInput, { flex: 0.7 }]}></Text>
                    </View>
                </View>
                <View style={[styles.ListContainer]}>
                    <View style={{ width: '48%', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ flex: 0.3 }}>Free</Text>
                        <TextInput style={[styles.TextInput, { flex: 0.7 }]}></TextInput>
                    </View>
                    <View style={{ width: '48%', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ flex: 0.3 }}>Rate</Text>
                        <Text style={[styles.TextInput, { flex: 0.7 }]}></Text>
                    </View>
                </View>
                <View style={[styles.ListContainer]}>
                    <View style={{ width: '48%', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ flex: 0.3 }}>Gross</Text>
                        <TextInput style={[styles.TextInput, { flex: 0.7 }]}></TextInput>
                    </View>
                    <View style={{ width: '48%', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ flex: 0.2 }}>QPS</Text>
                        <Text style={[styles.TextInput, { flex: 0.4 }]}></Text>
                        <Text style={[styles.TextInput, { flex: 0.4 }]}></Text>
                    </View>
                </View>
                <View style={[styles.ListContainer]}>
                    <View style={{ width: '48%', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ flex: 0.2 }}>SCM</Text>
                        <TextInput style={[styles.TextInput, { flex: 0.4 }]}></TextInput>
                        <TextInput style={[styles.TextInput, { flex: 0.4 }]}></TextInput>
                    </View>
                    <View style={{ width: '48%', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ flex: 0.2 }}>Disc.</Text>
                        <Text style={[styles.TextInput, { flex: 0.4 }]}></Text>
                        <Text style={[styles.TextInput, { flex: 0.4 }]}></Text>
                    </View>
                </View>
                <View style={[styles.ListContainer]}>
                    <View style={{ width: '48%', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ flex: 0.2 }}>Oth I</Text>
                        <TextInput style={[styles.TextInput, { flex: 0.4 }]}></TextInput>
                        <TextInput style={[styles.TextInput, { flex: 0.4 }]}></TextInput>
                    </View>
                    <View style={{ width: '48%', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ flex: 0.2 }}>II</Text>
                        <Text style={[styles.TextInput, { flex: 0.4 }]}></Text>
                        <Text style={[styles.TextInput, { flex: 0.4 }]}></Text>
                    </View>
                </View>
                <View style={[styles.ListContainer]}>
                    <View style={{ width: '48%', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ flex: 0.2 }}>Gst[C]</Text>
                        <TextInput style={[styles.TextInput, { flex: 0.4 }]}></TextInput>
                        <TextInput style={[styles.TextInput, { flex: 0.4 }]}></TextInput>
                    </View>
                    <View style={{ width: '48%', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ flex: 0.2 }}>[S]</Text>
                        <Text style={[styles.TextInput, { flex: 0.4 }]}></Text>
                        <Text style={[styles.TextInput, { flex: 0.4 }]}></Text>
                    </View>
                </View>
                <View style={[styles.ListContainer]}>
                    <View style={{ width: '48%', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ flex: 0.2 }}>Gst[I]</Text>
                        <TextInput style={[styles.TextInput, { flex: 0.4 }]}></TextInput>
                        <TextInput style={[styles.TextInput, { flex: 0.4 }]}></TextInput>
                    </View>
                    <View style={{ width: '48%', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ flex: 0.2 }}>Cess</Text>
                        <Text style={[styles.TextInput, { flex: 0.4 }]}></Text>
                        <Text style={[styles.TextInput, { flex: 0.4 }]}></Text>
                    </View>
                </View>
            </ScrollView>
            <View style={{flexDirection:'row'}}>
                <View style={[styles.ListContainerFooter]}>
                    <Text style={{ color: '#fff', fontSize: 15, alignSelf: 'center' }}>Item Total:</Text>
                </View>
                <TouchableOpacity style={[styles.ListContainerFooter,{marginLeft:5}]}>
                    <Text style={{ color: '#fff', fontSize: 15, alignSelf: 'center' }}>Save</Text>
                </TouchableOpacity>
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
        justifyContent: 'space-between',
        marginTop: 30,
        alignItems: 'center',

    },
    TextInput: {
        padding: 10,
        paddingBottom: 3,
        borderBottomWidth: 1,
        borderColor: '#4c164d',
        borderRadius: 8,
        width: '100%',
        // marginTop: 5
    },
    ListContainerFooter: {
        backgroundColor: '#4c164d',
        borderRadius: 8,
        paddingVertical: 15,
        bottom: 0,
        width: '50%',
        alignSelf: 'center'
    },
})
export default AddInvoiceItem