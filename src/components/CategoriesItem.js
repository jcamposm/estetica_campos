import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native"
import React from "react"

const CategoriesItem = ({ item, onSelected }) => {
  return (
    <View
      style={{ ...styles.categoriesItem, ...{ backgroundColor: item.color } }}
    >
      <TouchableOpacity
        style={styles.container}
        onPress={() => onSelected(item)}
      >
      <Image
            style={styles.image}
            source={{
              uri: item.img,
            }}
          />
        <View style={styles.textContainer}>
          <Text style={{color: "white",}}>{item.title}</Text>
        </View>
        
      </TouchableOpacity>
    </View>
  )
}

export default CategoriesItem

const styles = StyleSheet.create({
  categoriesItem: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
    width: 170,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    marginLeft: -15,


  },
  image: {
    width:170,
    height: 120,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
})
