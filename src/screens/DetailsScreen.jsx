import { Button, StyleSheet, Text, View } from "react-native"
import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { addItem } from "../store/actions/cart.action"

const DetailsScreen = ({ navigation, route }) => {
  const dispatch = useDispatch()
  const service = useSelector(state => state.products.selected)

  useEffect(() => {
    console.log(route.params)
  }, [])

  const handleAddItem = () => {
    dispatch(addItem(service))
  }

  return (
    <View style={styles.container}>
      <Text>{service.name}</Text>
      <Text>{service.description}</Text>
      <Text>{service.price}</Text>
      <Button title="Añadir al carrito" onPress={handleAddItem} />
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
