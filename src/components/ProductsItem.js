import { Image, StyleSheet, Text, TouchableOpacity, View, } from "react-native"
import React from "react"
import { COLORS } from "../constants/colors"

const ProductsItem = ({ item, onSelected }) => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onSelected(item)}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
        />
      </View>
      <View>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>Precio: ${item.price} USD</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ProductsItem

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    margin: 10,
    padding: 10,
    width: "50%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc"
  },
  imageContainer: {
    height: 100,
  },
  
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 5,
  },
  title: {
    fontFamily: "RobotoBold",
    fontSize: 16,
    marginBottom: 10,
  },
  price: {
    textAlign: "center",
    fontFamily: "RobotoBold",
    color: COLORS.primary,
    borderTopColor: "#ccc",
    borderWidth: 1,
    paddingTop: 10,
    marginTop: 10,    
    borderColor: "white",
  }, 
  description: {
    fontSize: 12,
  }
})
