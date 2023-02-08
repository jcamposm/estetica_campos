import { Button, StyleSheet, Text, View, Image } from "react-native"
import React, { useEffect } from "react"
import ProductsItemList from "../components/ProductsItemList"

const DetailsScreen = ({ navigation, route }) => {
  useEffect(() => {
    console.log(route.params)
  }, [])

  return (
    <View style={styles.container}>

<ProductsItemList />
           
      <Text style={styles.title}>{"\n"}de {route.params.name} {"\n"}</Text>
      <Button title="Volver a las categorias" onPress={() => navigation.popToTop()} />
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 150,
  }, title: {
fontSize: 20,
  },
})
