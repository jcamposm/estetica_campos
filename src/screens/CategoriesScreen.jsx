import React from "react"
import { Button, StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from "react-native"
import CategoriesItem from "../components/CategoriesItem"
import Ionicons from "@expo/vector-icons/Ionicons"
import { COLORS } from "../constants/colors"

import CarouselScreen from "./CarouselScreen"

import { useSelector, useDispatch } from "react-redux"
import { selectedCategory } from "../store/actions/category.action"

const CategoriesScreen = ({ navigation }) => {
  const categories = useSelector(state => state.categories.categories)
  const dispatch = useDispatch()

  const handleSelectedCategory = item => {
    dispatch(selectedCategory(item.id))
    navigation.navigate("Products", {
      title: item.title,
    })
  }

  const renderCategoriesItem = ({ item }) => (
    <View style={styles.categoriesContainer}>
      <CategoriesItem item={item} onSelected={handleSelectedCategory} />
    </View>
  )

  const MyButton = ({ onPress }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Gallery")}>
        <View style={styles.image2}>
          <Text style={styles.text2}>
            Ver portafolio de trabajos
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  
  const BannerTop = () => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Us")}>
        <Image source={ {uri: "https://estudioalapar.cl/wp-content/uploads/2023/03/bodylicious-app-coderhouse-foto.png"}} style={{ width: 420, height: 200,}}/>
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.container}>
      <BannerTop />
      <MyButton/>
      <Text style={styles.text}>Conoce nuestros servicios</Text>
      <FlatList
        data={categories}
        renderItem={renderCategoriesItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  categoriesContainer: {
    padding: 10,
    height: 160,
  },
  image:{
    width: "100%",
    height: 200,
  }, text: {
    paddingTop: 10,
    fontSize: 16,
    fontFamily: "RobotoBold", 
  }, image2:{
    justifyContent: "center",
    alignItems: "center",
    width: 360,
    borderRadius: 20,
    height: 80,
    marginTop: -30,
    borderColor: "#fff",
    borderWidth: 8,
    backgroundColor: COLORS.secondary,
  }, text2: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "RobotoBold",} 
})
