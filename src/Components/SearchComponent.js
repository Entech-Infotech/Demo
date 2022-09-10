import React, { useEffect, useRef, useState } from "react";
import { View, Dimensions, StyleSheet, Text, TouchableOpacity, TextInput, FlatList, Animated, Keyboard } from 'react-native'
import { Fontisto, Ionicons } from '@expo/vector-icons'


const SearchComponent = (props) => {

    const searchHeight = Dimensions.get('window').height / 1.2;
    const customData = props.customData;
    const [data, setData] = useState(null);
    const [label, setLabel] = useState(null);
    const [value, setValue] = useState(null);
    // const popupAnimation = useRef(new Animated.Value(-height)).current
    const popupAnimation = useRef(new Animated.Value(-searchHeight)).current

    //Show animation
    const show = () => {
        Animated.timing(
            popupAnimation,
            {
                toValue: 0,
                duration: 500,
                useNativeDriver: false
            }
        ).start();
    }

    //Hide animation
    const hide = () => {
        Animated.timing(
            popupAnimation,
            {
                toValue: -searchHeight,
                duration: 500,
                useNativeDriver: false
            }
        ).start();
    }

    const animatedStyle = {
        bottom: popupAnimation
    }
    //#endregion

    useEffect(() => {
        console.log(props.show)
        var keyboardDidShowListener = null;
        var keyboardDidHideListener = null;
        if (props.show) {
            setData(customData.data);
            setTestData(customData.data)
            setLabel(customData.label);
            setValue(customData.value);
            show();
            keyboardDidShowListener = Keyboard.addListener(
                'keyboardDidShow',
                () => {
                    console.log("Keyboard Open");
                    setKeyboardVisible(true); // or some other action
                }
            );
            keyboardDidHideListener = Keyboard.addListener(
                'keyboardDidHide',
                () => {
                    setKeyboardVisible(false); // or some other action
                }
            );
        }
        else {
            console.log(isKeyboardVisible)
            Keyboard.removeAllListeners('keyboardDidShow');
            Keyboard.removeAllListeners('keyboardDidHide');
            hide();
        }
    }, [props.show])
    const [search, setSearch] = useState('')
    const [testData, setTestData] = useState(null);

    useEffect(() => {
        console.log("Testing")
    }, [isKeyboardVisible])

    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    return (
        <Animated.View style={[styles.searchContainer, animatedStyle, { position: isKeyboardVisible ? "relative" : "absolute", zIndex: 2, elevation: 2 }]}>
            <View style={[styles.shadowbtn, { padding: 20, backgroundColor: '#4C164D', borderTopStartRadius: 35, borderTopEndRadius: 35 }]}>
                <Text style={{ color: '#FFF', textAlign: 'center' }}>Select Item</Text>
            </View>
            <View floatingLabel style={[styles.SearchInput, { paddingVertical: 3, paddingHorizontal: 10 }]}>
                <Ionicons name="search-outline" size={20} color="#4c164d" />
                <TextInput
                    style={{ paddingVertical: 2, width: '90%', marginLeft: 5 }}
                    value={search}
                    onChangeText={text => { setSearch(text); let obj = data.filter(o => o[label].toLowerCase().includes(text.toLowerCase())); setTestData(obj); }}
                    placeholder='Search...'
                // placeholderTextColor='#fff'
                />
            </View>
            {testData != null && testData.length > 0 ?
                <FlatList
                    data={testData}
                    style={{ paddingHorizontal: 10 }}
                    renderItem={({ index, item }) => {
                        return (
                            <TouchableOpacity style={styles.ListItemText} onPress={() => { customData.setCustomStateLabel(item[label]); customData.setCustomStateValue(item[value]); props.setShow(false) }}>
                                <Text>  {item[label]}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
                : <View style={{ marginTop: 20 }}><Text style={{ fontSize: 20, color: '#000', textAlign: 'center' }}>No Data Found</Text></View>}

            <TouchableOpacity style={[styles.login, styles.shadowbtn, { position: 'absolute', bottom: 0 }]} onPress={() => { props.setShow(),setSearch('') }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: '#fff', fontSize: 18 }}>OK</Text>
                </View>
            </TouchableOpacity>

        </Animated.View>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        height: Dimensions.get('window').height / 1.3,
        borderTopStartRadius: 35,
        borderTopEndRadius: 35,
        backgroundColor: '#FFF',
        bottom: 10,
        alignSelf: 'center'
    },
    shadowbtn: {
        shadowOffset: { width: 1, height: 10 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 15,
    },
    login: {
        alignSelf: 'center',
        backgroundColor: '#4c164d',
        width: '100%',
        justifyContent: 'center',
        padding: 10,
        // borderColor: '#fff',
        // borderWidth:2,
        // borderRadius: 8,
        borderWidth: 1,
    },
    SearchInput: {
        borderWidth: 1,
        borderRadius: 40,
        marginTop: 5,
        backgroundColor: '#f7f6f9',
        borderColor: '#4c164d',
        color: '#000000',
        flexDirection: 'row',
        alignItems: 'center'
    },
    ListItemText: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#4c164d',
        borderRadius: 8,
        // width: '50%'
        marginTop: 5
    }

})

export default SearchComponent;