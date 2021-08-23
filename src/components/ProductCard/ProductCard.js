import React from "react"
import {View, Text, Image} from "react-native"
import styles from "./ProductCard.style"

const ProductCard = ({product}) => {
    return(
        <View style={styles.product_card}>
            <Image 
                source={{ uri: product.imgURL}}
                style={styles.product_image}
            />
            <Text style={styles.product_name}>{product.title}</Text>
            <Text style={styles.product_price}>{product.price}</Text>
        </View>
    )
}

export default ProductCard