import { Button, StyleSheet, Text, View, } from "react-native"
import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { addItem } from "../store/actions/cart.action"
//import ImageSelector from "../components/ImageSelector"
import {COLORS} from "../constants/colors"
import NewPlaceScreen from "./NewPlaceScreen"

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
      <View style = {styles.lineStyle} />
      <Button title="Añadir al carrito" 
      color={COLORS.terciary}
      onPress={handleAddItem} />
      <NewPlaceScreen />
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
  lineStyle:{
    borderWidth: 0.5,
    width: "80%",
    borderColor:"black",
    margin:10,
  }
})
