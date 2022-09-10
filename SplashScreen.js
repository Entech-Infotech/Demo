import React, { useState, useRef, useContext, useEffect } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Text,
    ImageBackground,
    StatusBar,
    TextInput,
    ScrollView,
    Animated,
    Image
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


function Splash() {
    return (
        <View style={[styles.container]}>
            <View style={{ flex: 0.2, alignItems: 'center', marginTop: 10 }}>
                <Text style={{ fontSize: 20, color: '#4c164d', fontWeight: 'bold', letterSpacing: 1.1 }}>Welcome To Score 3S Cloud</Text>
                <Text style={{ fontSize: 18, marginTop: 5, color: '#9FA1A5' }}>One solution for Invoicing</Text>
            </View>
            <View style={{ flex: 0.4 }}>
                <Image
                    source={require('./assets/splash_icon.png')}
                    style={styles.imageContainer}
                />
            </View>
            {/* {continue button} */}
            <View style={{ flex: 0.2 }}>
                <TouchableOpacity style={[styles.login, styles.shadowbtn]}>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{ color: '#fff',fontSize:18 }}>Continue  </Text>
                        <FontAwesome name="angle-double-right" size={18} color="#fff" style={{marginTop:2}}/>
                    </View>



                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        padding: 10
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    login: {
        alignSelf: 'center',
        backgroundColor: '#4c164d',
        width: '100%',
        justifyContent: 'center',
        padding: 10,
        borderColor: '#fff',
        // borderWidth:2,
        borderRadius: 8,
        borderWidth: 1,
    },
    shadowbtn: {
        shadowOffset: { width: 1, height: 10 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        // elevation: 15,
    },

})
export default Splash