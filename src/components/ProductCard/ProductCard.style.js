import {StyleSheet, Dimensions} from "react-native"

export default StyleSheet.create({
    product_image: {
        margin: 4,
        width: Dimensions.get("window").width * 3.8 / 10,
        height: Dimensions.get("window").height * 1.8 / 10,
        borderRadius:10,
    },
    product_card: {
        margin: 10,
        backgroundColor: "#CCD1D1",
        width: Dimensions.get("window").width * 4 / 10,
        height: Dimensions.get("window").height * 3 / 10,
        borderRadius: 10,
    },
    product_name: {
        marginLeft: 10,
        marginRight: 10,
        marginTop:5,
        marginBottom: 5,
        fontWeight: "bold",
    },
    product_price: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5,
        color: "grey",
        fontWeight: "bold",
    }
})