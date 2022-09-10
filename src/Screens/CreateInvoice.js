import React, { useState, useRef, useContext, useEffect } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    TextInput,
    FlatList,
    Dimensions,
    KeyboardAvoidingView
} from 'react-native';
import { FontAwesome, Fontisto, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import SearchComponent from "../Components/SearchComponent";
import BackHeader from "../Components/BackHeader";
import AddedItem from "../Components/AddedItem";

const CreateInvoiceScreen = (props) => {
    const [show, setShow] = useState(false);
    const [currentSelected, setCurrentSelected] = useState(null);
    const [division, setDivision] = useState('Select Division');
    const [divisionId, setDivisionId] = useState(null);
    const [route, setRoute] = useState('Select Route');
    const [routeId, setRouteId] = useState(null);
    const [salesmen, setSalesmen] = useState('Select Salesmen');
    const [salesmenId, setSalesmenId] = useState(null);
    const [accountMaster, setAccountMaster] = useState('Select AccountMaster');
    const [accountMasterId, setAccountMasterId] = useState(null);


    const Division =
        [
            {
                "Id": 1,
                "DivisionName": "GENERAL"
            },
            {
                "Id": 2,
                "DivisionName": "DETOL DIVISION"
            }
        ]
    const Routes =
        [
            {
                "Id": 3,
                "RouteName": "AHMEDABAD"
            },
            {
                "Id": 4,
                "RouteName": "KALOL"
            },
            {
                "Id": 5,
                "RouteName": "PETHAPUR"
            },
            {
                "Id": 6,
                "RouteName": "ALAMPUR"
            },
            {
                "Id": 9,
                "RouteName": "CHILODA"
            },
            {
                "Id": 10,
                "RouteName": "KUDASAN"
            },
            {
                "Id": 11,
                "RouteName": "CHANDRALA"
            },
            {
                "Id": 12,
                "RouteName": "CHHALA"
            },
            {
                "Id": 16,
                "RouteName": "DASHELA"
            },
            {
                "Id": 23,
                "RouteName": "SARGASAN"
            },
            {
                "Id": 24,
                "RouteName": "13"
            },
            {
                "Id": 25,
                "RouteName": "11"
            },
            {
                "Id": 26,
                "RouteName": "2"
            },
            {
                "Id": 27,
                "RouteName": "3"
            },
            {
                "Id": 28,
                "RouteName": "4"
            },
            {
                "Id": 29,
                "RouteName": "5"
            },
            {
                "Id": 30,
                "RouteName": "6"
            },
            {
                "Id": 31,
                "RouteName": "7"
            },
            {
                "Id": 32,
                "RouteName": "8"
            },
            {
                "Id": 33,
                "RouteName": "10"
            },
            {
                "Id": 34,
                "RouteName": "12"
            },
            {
                "Id": 35,
                "RouteName": "14"
            },
            {
                "Id": 36,
                "RouteName": "15"
            },
            {
                "Id": 37,
                "RouteName": "16"
            },
            {
                "Id": 38,
                "RouteName": "17"
            },
            {
                "Id": 39,
                "RouteName": "18"
            },
            {
                "Id": 40,
                "RouteName": "19"
            },
            {
                "Id": 41,
                "RouteName": "20"
            },
            {
                "Id": 42,
                "RouteName": "21"
            },
            {
                "Id": 43,
                "RouteName": "22"
            },
            {
                "Id": 44,
                "RouteName": "23"
            },
            {
                "Id": 45,
                "RouteName": "24"
            },
            {
                "Id": 46,
                "RouteName": "25"
            },
            {
                "Id": 47,
                "RouteName": "26"
            },
            {
                "Id": 48,
                "RouteName": "27"
            },
            {
                "Id": 49,
                "RouteName": "28"
            },
            {
                "Id": 50,
                "RouteName": "29"
            },
            {
                "Id": 51,
                "RouteName": "30"
            },
            {
                "Id": 52,
                "RouteName": "PDPU ROAD"
            },
            {
                "Id": 53,
                "RouteName": "VAVOL"
            },
            {
                "Id": 54,
                "RouteName": "ADALAJ"
            },
            {
                "Id": 55,
                "RouteName": "UVARSAD"
            },
            {
                "Id": 56,
                "RouteName": "INFOCITY"
            },
            {
                "Id": 57,
                "RouteName": "RANDHEJA"
            },
            {
                "Id": 58,
                "RouteName": "KOLAVADA"
            },
            {
                "Id": 59,
                "RouteName": "MANSA"
            }
        ]
    const Salesmans =
        [
            {
                "Id": 1,
                "SalesmanName": "Pradeep Modi"
            },
            {
                "Id": 2,
                "SalesmanName": "ashish(7990528944)"
            },
            {
                "Id": 3,
                "SalesmanName": "hashmukh(8141950007)"
            },
            {
                "Id": 4,
                "SalesmanName": "KIRTI(9429291555)"
            },
            {
                "Id": 5,
                "SalesmanName": "NILESH(6354656591)"
            },
            {
                "Id": 6,
                "SalesmanName": "infozealtest"
            },
            {
                "Id": 7,
                "SalesmanName": "rajp"
            }
        ]
    const AccountMasters = [
        {
            "Id": 58,
            "AccountName": "ARTSANA INDIA PRIVATE LTD.",
            "AccountGSTType": "B2BWS"
        },
        {
            "Id": 1120,
            "AccountName": "B MART GOTA",
            "AccountGSTType": ""
        },
        {
            "Id": 1076,
            "AccountName": "VIJAY CHEMICAL",
            "AccountGSTType": "B2BOS"
        }
    ]

    useEffect(() => {
        console.log(props.route)
    }, []);
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"} style={[styles.container]}>
            <BackHeader navigation={props.navigation} />
            <SearchComponent show={show} setShow={setShow} customData={currentSelected} />
            <View style={{ padding: 10 }}>
                <View style={[styles.ListContainer]}>
                    <View style={{ flexDirection: 'row' }}>
                        <MaterialCommunityIcons name="calendar-month-outline" size={22} color={'#4c164d'} />
                        <Text>  28-08-2022</Text>
                    </View>
                    <TouchableOpacity style={[styles.TextInput, { width: '50%' }]} onPress={() => {
                        setCurrentSelected({
                            'setCustomStateLabel': setDivision,
                            'setCustomStateValue': setDivisionId,
                            'data': Division,
                            'label': 'DivisionName',
                            'value': 'Id'
                        }); setShow(!show);
                    }}>
                        <Text>{division}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={[styles.TextInput]} onPress={() => {
                        setCurrentSelected({
                            'setCustomStateLabel': setRoute,
                            'setCustomStateValue': setRouteId,
                            'data': Routes,
                            'label': 'RouteName',
                            'value': 'Id'
                        });
                        setShow(!show)
                    }}>
                        <Text>{route}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.TextInput]} onPress={() => {
                        setCurrentSelected({
                            'setCustomStateLabel': setSalesmen,
                            'setCustomStateValue': setSalesmenId,
                            'data': Salesmans,
                            'label': 'SalesmanName',
                            'value': 'Id'
                        });
                        setShow(!show)
                    }}>
                        <Text>{salesmen}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.TextInput]} onPress={() => {
                        setCurrentSelected({
                            'setCustomStateLabel': setAccountMaster,
                            'setCustomStateValue': setAccountMasterId,
                            'data': AccountMasters,
                            'label': 'AccountName',
                            'value': 'Id'
                        });
                        setShow(!show)
                    }}>
                        <Text>{accountMaster}</Text>
                    </TouchableOpacity>


                </View>
                {/* {continue button} */}
                <View style={{ marginTop: 10 }}>
                    <TouchableOpacity style={[styles.AddButton, styles.shadowbtn]} onPress={() => { props.navigation.navigate("AddInvoiceItem") }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                            <Fontisto name="plus-a" size={16} style={{ color: '#fff' }} />
                            <Text style={{ color: '#fff', fontSize: 14 }}>  Add Item</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.ListContainerFooter]}>
                <Text style={{ color: '#fff', fontSize: 14, alignSelf: 'center' }}>Round Off(+/-)</Text>
                <Text style={{ color: '#fff', fontSize: 14, alignSelf: 'center' }}>0</Text>
                <Text style={{ color: '#fff', fontSize: 14, alignSelf: 'center' }}>Net</Text>
                <Text style={{ color: '#fff', fontSize: 14, alignSelf: 'center' }}>0</Text>
            </View>
            <View>
                <AddedItem />
            </View>
        </KeyboardAvoidingView>

    )
}
const styles = StyleSheet.create({
    container: {
        // justifyContent: 'space-evenly',
        padding: 0,
        paddingTop: 0,
        flex: 1
    },
    ListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        width: Dimensions.get('window').width / 3.5,
        justifyContent: 'center',
        padding: 8,
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
        paddingVertical: 15,
        marginTop: 10,
        bottom: 10,
        position: 'absolute',
        width: '100%',
        alignSelf: 'center'
    },
})
export default CreateInvoiceScreen