import React from "react"
import {View, Text, StyleSheet, TextInput, Image, Dimensions} from "react-native"
import { FlatList } from "react-native-gesture-handler"
import ProductCard from "./components/ProductCard"
import product_data from "./product_data.json"

function App(){

    const renderProduct = ({item}) => <ProductCard product={item}/>

    return(
        <View style={styles.container}>
            <Text style={styles.header}>PATIKASTORE</Text>
            <TextInput placeholder="search" style={styles.searchBox}/>

            <FlatList 
                keyExtractor = { (item, index) => item.id.toString() }
                data={product_data}
                renderItem={renderProduct}
                numColumns={2}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        backgroundColor: "white",
    },
    header: {
        fontWeight: "bold",
        fontSize: 20,
        color: "purple",
        margin: 10,
    },
    searchBox: {
        margin: 10,
        padding: 3,
        paddingLeft: 10,
        borderRadius: 10,
        backgroundColor: "#CCD1D1"
    },
})

export default App