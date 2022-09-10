import React from 'react';
import { Modal,ActivityIndicator, Dimensions, View, StyleSheet,Text } from 'react-native';

const Loader = ({ visibility }) => {
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visibility}
            >
                <View style={styles.centeredView}>
                    <ActivityIndicator size={75} color="#4c164d" />
                    <Text style={{ color: '#ffffff', marginTop:10,  fontSize:16,letterSpacing:1 }}>Loading...</Text>
                </View>
            </Modal>
        </View>
    );
};
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 0,
        backgroundColor:"#00000079"
    },
    modalView: {
        margin: 20,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
});

export default Loader;