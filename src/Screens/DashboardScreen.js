import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Image } from "react-native"
import { StatusBar } from 'expo-status-bar';
import SearchComponent from "../Components/SearchComponent";

const DashboardScreen = ({ navigation }) => {
    const [show, setShow] = useState(false);
    return (
        <View style={{ flex: 1 }}>
            {/* <SearchComponent show={show} setShow={setShow} /> */}
            <StatusBar style="light" />
            <View style={{ flex: 0.8 }}>
                <Image
                    source={require('../../assets/Nerd-amico.png')}
                    style={styles.imageContainer}
                />
                <View style={{ position: 'absolute', width: '100%', bottom: 30 }}>
                    <Text style={{ fontSize: 26, letterSpacing: 1.5, textAlign: 'center', color: '#4c164d', fontWeight: '600', textTransform: 'uppercase' }}>Under Construction</Text>
                    <Text style={{ fontSize: 20, textAlign: 'center', color: '#4c164d', marginTop: 10 }}>This Feature is Coming Soon.</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
})

export default DashboardScreen;