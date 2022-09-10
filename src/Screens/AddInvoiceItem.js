import React, { useState, useRef, useContext, useEffect } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    TextInput,
    FlatList,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';
import { FontAwesome, Fontisto, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import BackHeader from "../Components/BackHeader";
import SearchComponent from "../Components/SearchComponent";
import * as constData from '../../Constants/APIContants';

const AddInvoiceItemScreen = (props) => {

    const [items, setItems] = useState(null);
    const [show, setShow] = useState(false);
    const [currentSelected, setCurrentSelected] = useState(null);
    const [item, setItem] = useState('Item Id')
    const [itemId, setItemId] = useState(0)

    useEffect(() => {
        fetchItems();
    },[])

    const fetchItems = async () => {
        var url = "http://test.score3s.com/api/v1/GetItem"
        const result = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(constData.postData)
        });
        const data = await result.json();
        if (data.ErrorMessage == "" && data.Items.length > 0) {
            setItems(data.Items);
        }
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"} style={[styles.container]}>
            <BackHeader navigation={props.navigation} />
            <SearchComponent show={show} setShow={setShow} customData={currentSelected} />
            <ScrollView style={{ paddingHorizontal: 10 }}>
            <View style={[styles.ListContainer]}>
                <TouchableOpacity style={[styles.SelectItemTextInput, { width: '50%'  }]} onPress={() => {
                    setCurrentSelected({
                        'setCustomStateLabel': setItem,
                        'setCustomStateValue': setItemId,
                        'data': items,
                        'label': 'ItemName',
                        'value': 'Id'
                    });
                    setShow(!show);
                }}>
                    <Text>{item}</Text>
                </TouchableOpacity>
              
                    <View style={{ width: '48%', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ flex: 0.4 }}>Select Item</Text>
                        <TextInput style={[styles.TextInput, { flex: 0.6 }]}></TextInput>
                    </View>
                </View>
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
                        <Text style={{ flex: 0.3 }}>QPS</Text>
                        <Text style={[styles.TextInput, { flex: 0.3 }]}></Text>
                        <Text style={[styles.TextInput, { flex: 0.4 }]}></Text>
                    </View>
                </View>
                <View style={[styles.ListContainer]}>
                    <View style={{ width: '48%', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ flex: 0.3 }}>SCM</Text>
                        <TextInput style={[styles.TextInput, { flex: 0.3 }]}></TextInput>
                        <TextInput style={[styles.TextInput, { flex: 0.4 }]}></TextInput>
                    </View>
                    <View style={{ width: '48%', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ flex: 0.3 }}>Disc.</Text>
                        <Text style={[styles.TextInput, { flex: 0.3 }]}></Text>
                        <Text style={[styles.TextInput, { flex: 0.4 }]}></Text>
                    </View>
                </View>
                <View style={[styles.ListContainer]}>
                    <View style={{ width: '48%', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ flex: 0.3 }}>Oth I</Text>
                        <TextInput style={[styles.TextInput, { flex: 0.3 }]}></TextInput>
                        <TextInput style={[styles.TextInput, { flex: 0.4 }]}></TextInput>
                    </View>
                    <View style={{ width: '48%', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ flex: 0.3 }}>II</Text>
                        <Text style={[styles.TextInput, { flex: 0.3 }]}></Text>
                        <Text style={[styles.TextInput, { flex: 0.4 }]}></Text>
                    </View>
                </View>
                <View style={[styles.ListContainer]}>
                    <View style={{ width: '48%', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ flex: 0.4 }}>Gst[C]</Text>
                        <TextInput style={[styles.TextInput, { flex: 0.3 }]}></TextInput>
                        <TextInput style={[styles.TextInput, { flex: 0.3 }]}></TextInput>
                    </View>
                    <View style={{ width: '48%', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ flex: 0.3 }}>[S]</Text>
                        <Text style={[styles.TextInput, { flex: 0.3 }]}></Text>
                        <Text style={[styles.TextInput, { flex: 0.4 }]}></Text>
                    </View>
                </View>
                <View style={[styles.ListContainer]}>
                    <View style={{ width: '48%', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ flex: 0.3 }}>Gst[I]</Text>
                        <TextInput style={[styles.TextInput, { flex: 0.3 }]}></TextInput>
                        <TextInput style={[styles.TextInput, { flex: 0.4 }]}></TextInput>
                    </View>
                    <View style={{ width: '48%', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ flex: 0.3 }}>Cess</Text>
                        <Text style={[styles.TextInput, { flex: 0.3 }]}></Text>
                        <Text style={[styles.TextInput, { flex: 0.4 }]}></Text>
                    </View>
                </View>
            </ScrollView>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <View style={[styles.ListContainerFooter]}>
                    <Text style={{ color: '#fff', fontSize: 15, alignSelf: 'center' }}>Item Total:</Text>
                </View>
                <TouchableOpacity style={[styles.ListContainerFooter, { marginLeft: 5 }]}>
                    <Text style={{ color: '#fff', fontSize: 15, alignSelf: 'center' }}>Save</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    container: {
        // justifyContent: 'space-evenly',
        paddingBottom: 10,
        flex: 1
    },
    ListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
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
    SelectItemTextInput: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#4c164d',
        borderRadius: 8,
        // width: '50%'
        marginTop: 15,
    }
})
export default AddInvoiceItemScreen