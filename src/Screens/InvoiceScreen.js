import React, { useState, useRef, useContext, useEffect } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    TextInput,
    FlatList,
    Image
} from 'react-native';
import { FontAwesome, Fontisto, Ionicons } from '@expo/vector-icons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateInvoiceScreen from './CreateInvoice';
import AddInvoiceItemScreen from "./AddInvoiceItem";
import * as constData from '../../Constants/APIContants';
import Loader from "../Components/Loader";

const InvoiceStackNavigator = createNativeStackNavigator();

const InvoiceScreenNavigation = ({ navigation, route }) => {
    React.useLayoutEffect(() => {

        const routeName = getFocusedRouteNameFromRoute(route)
        if (routeName != undefined && routeName != "SearchInvoice") {
            navigation.setOptions({ tabBarStyle: { display: 'none' }, swipeEnabled: false });
        } else {
            navigation.setOptions({ tabBarStyle: { display: 'flex' }, swipeEnabled: true });
        }
    }, [navigation, route]);
    return (
        <InvoiceStackNavigator.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <InvoiceStackNavigator.Screen name="SearchInvoice" component={InvoiceScreen} />
            <InvoiceStackNavigator.Screen name="CreateInvoice" component={CreateInvoiceScreen} />
            <InvoiceStackNavigator.Screen name="AddInvoiceItem" component={AddInvoiceItemScreen} />

            {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
        </InvoiceStackNavigator.Navigator>
    )
}

const InvoiceScreen = (props) => {
    const [search, setSearch] = useState('');
    const [invoices, setInvoices] = useState(null);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);

    const color = [
        { borderColor: '#C3D8EF', backgroundColor: '#E2ECF8' },
        { borderColor: '#EEC3D9', backgroundColor: '#FAE0EE' },
        { borderColor: '#D4E8CE', backgroundColor: '#E2F0E0' },
        { borderColor: '#F5E9A3', backgroundColor: '#FFF5CC' },
        { borderColor: '#DFD4F2', backgroundColor: '#F3E5FF' },

    ]

    useEffect(() => {
        fetchInvoice();
    }, [])

    const fetchInvoice = async () => {
        setLoading(true)
        var url = "http://test.score3s.com/api/v1/GetInvoice"
        const result = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(constData.postData)
        });
        setLoading(false)
        const data = await result.json();
        if (data.ErrorMessage == "" && data.Invoices.length > 0) {
            var invoiceData = data.Invoices;
            var total = 0;
            invoiceData.map(item => total += item.Amount);
            setTotal(total);
            console.log(invoiceData);
            setInvoices(data.Invoices);
        }
    }
    return (
        <View style={[styles.container]}>
            <View floatingLabel style={[styles.SearchInput, { paddingVertical: 3, paddingHorizontal: 10, flex: 0.05 }]}>
            <Loader visibility={loading} />
                <Ionicons name="search-outline" size={20} color="#4c164d" />
                <TextInput
                    style={{ paddingVertical: 5, width: '90%', marginLeft: 5 }}
                    // value={search}
                    // onChangeText={text => { setSearch(text); }}
                    placeholder='Search...'
                // placeholderTextColor='#fff'
                />
            </View>
            {invoices != null ?
                <View style={{ flex: 0.8 }}>
                    <View style={[styles.ListContainer]}>
                        <Text style={{ color: '#fff', fontSize: 12, textAlign: 'center', flex: 0.1 }}>Sr</Text>
                        <Text style={{ color: '#fff', fontSize: 12, textAlign: 'center', flex: 0.35 }}>Invoice No.</Text>
                        <Text style={{ color: '#fff', fontSize: 12, textAlign: 'center', flex: 0.35 }}>Client Name</Text>
                        <Text style={{ color: '#fff', fontSize: 12, textAlign: 'center', flex: 0.15 }}>Amount</Text>
                        <View style={{ flex: 0.05 }}></View>
                    </View>
                    <FlatList
                        data={invoices}
                        renderItem={({ index, item }) => {
                            return (
                                <TouchableOpacity style={styles.ListItemText}>
                                    <Text style={{ flex: 0.1, textAlign: 'center', fontSize: 11, textAlignVertical: 'center' }}>  {item.InvId}</Text>
                                    <Text style={{ flex: 0.35, textAlign: 'center', fontSize: 11, textAlignVertical: 'center' }}>  {item.InvNo}</Text>
                                    <Text style={{ flex: 0.35, textAlign: 'center', fontSize: 11, textAlignVertical: 'center' }}>  {item.ClientName}</Text>
                                    <Text style={{ flex: 0.15, textAlign: 'center', fontSize: 11, textAlignVertical: 'center' }}>  {item.Amount}</Text>
                                    <Ionicons name="ellipsis-vertical-sharp" size={20} style={{ marginTop: 2, color: '#000' }} />
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
                :
                <View style={{ flex: 0.9 }}>
                    <Image
                        source={require('../../assets/Alone-pana.png')}
                        style={{ height: '80%', width: '100%', resizeMode: 'contain' }}
                    />
                    <Text style={{ fontSize: 25, textAlign: 'center', color: '#4c164d' }}>No Data Found</Text>
                </View>
            }
            {invoices != null &&
                <View style={[styles.ListContainer, { justifyContent: 'flex-end', paddingHorizontal: 15, alignSelf: 'flex-start', width: '75%', bottom: 22, position: 'absolute', left: 10, flex: 0.1 }]}>
                    <Text style={{ color: '#fff', fontSize: 15, alignSelf: 'center', textAlign: 'center' }}>Total:  </Text>
                    <Text style={{ color: '#fff', fontSize: 15, alignSelf: 'center' }}>{total}</Text>
                </View>
            }
            <TouchableOpacity style={[styles.plusButton, styles.shadowbtn]} onPress={() => { props.navigation.navigate('CreateInvoice') }}>
                <Fontisto name="plus-a" size={20} style={{ marginTop: 2, color: '#FFF' }} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
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
        bottom: 15,
        right: 15
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
    }
})

export default InvoiceScreenNavigation