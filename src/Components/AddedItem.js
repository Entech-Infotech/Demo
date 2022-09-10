import React from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    TextInput,
    FlatList,
    Image
} from 'react-native';

const AddedItem = () => {

    const Item =
    {
        "AQty": 'Box1',
        "PQty": 'PCS',
        "TQty": 1,
        "Gross": 45.50,
        "SCM": "",
        "other_I": '',
        "other_II": '',
        "CGST": "9.0 4.10",
        "SGST": "9.0 4.10",
        "IGST": "",
        "Free": "Rate 45.5",
        "QPS": "",
        "Disc": "",
        "CESS": ''
    }

    return (
        <View>
            <View style={[styles.headerdata]}>
                <Text style={{ fontSize: 15, textAlignVertical: 'center', marginTop: 7, fontWeight: 'bold',color:"#d5d5d5" }}> 1 </Text>
                <Text style={{ fontSize: 15, textAlignVertical: 'center', marginTop: 7, fontWeight: 'bold',color:"#d5d5d5" }}> CY 3IN1 30/-</Text>
                <Text style={{ fontSize: 15, textAlignVertical: 'center', marginTop: 7, fontWeight: 'bold',color:"#d5d5d5" }}> MRP 30.0</Text>
            </View>
            <View style={styles.ListItemText}>
                <View>
                    <Text style={{ fontSize: 15, textAlignVertical: 'center', marginTop: 7, fontWeight: 'bold' }}> AQty: {Item.AQty}</Text>
                    <Text style={{ fontSize: 15, textAlignVertical: 'center', marginTop: 7, fontWeight: 'bold' }}> TQty: {Item.TQty}</Text>
                    <Text style={{ fontSize: 15, textAlignVertical: 'center', marginTop: 7, fontWeight: 'bold' }}> Gross: {Item.Gross}</Text>
                    <Text style={{ fontSize: 15, textAlignVertical: 'center', marginTop: 7, fontWeight: 'bold' }}> SCM: {Item.SCM}</Text>
                    <Text style={{ fontSize: 15, textAlignVertical: 'center', marginTop: 7, fontWeight: 'bold' }}> Other_I: {Item.Other_I}</Text>
                    <Text style={{ fontSize: 15, textAlignVertical: 'center', marginTop: 7, fontWeight: 'bold' }}> CGST: {Item.CGST}</Text>
                    <Text style={{ fontSize: 15, textAlignVertical: 'center', marginTop: 7, fontWeight: 'bold' }}> IGST: {Item.IGST}</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 15, textAlignVertical: 'center', marginTop: 7, fontWeight: 'bold' }}> PQty: {Item.PQty}</Text>
                    <Text style={{ fontSize: 15, textAlignVertical: 'center', marginTop: 7, fontWeight: 'bold' }}> Free: {Item.Free}</Text>
                    <Text style={{ fontSize: 15, textAlignVertical: 'center', marginTop: 7, fontWeight: 'bold' }}> QPS: {Item.QPS}</Text>
                    <Text style={{ fontSize: 15, textAlignVertical: 'center', marginTop: 7, fontWeight: 'bold' }}> Disc. {Item.Disc}</Text>
                    <Text style={{ fontSize: 15, textAlignVertical: 'center', marginTop: 7, fontWeight: 'bold' }}> other_II: {Item.other_II}</Text>
                    <Text style={{ fontSize: 15, textAlignVertical: 'center', marginTop: 7, fontWeight: 'bold' }}> SGST: {Item.SGST}</Text>
                    <Text style={{ fontSize: 15, textAlignVertical: 'center', marginTop: 7, fontWeight: 'bold' }}> CESS {Item.CESS}</Text>

                    {/* <Ionicons name="ellipsis-vertical-sharp" size={20} style={{ marginTop: 2, color: '#000' }} /> */}
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        // backgroundColor: '#f4f4f4'
    },
    ListItemText: {
        padding: 10,
        // borderTopWidth: 5,
        // borderColor: '#aa99cc',
        borderRadius: 8,
        borderTopLeftRadius:0,
        borderTopRightRadius:0,
        backgroundColor: '#DFD4F2',
        // backgroundColor: '#4c164dA1',
        width: '95%',
        // marginTop: 5,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center'
    },
    headerdata:{
        flexDirection:'row',
        backgroundColor: '#aa99cc',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        paddingVertical: 3,
        marginTop: 10,
        alignSelf: 'center',
        alignItems:'center',
        width:'95%',
        borderBottomLeftRadius:0,
        borderBottomRightRadius:0
    }
})
export default AddedItem;