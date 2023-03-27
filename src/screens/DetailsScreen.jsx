import { Button, StyleSheet, Text, View, Image} from "react-native"
import React, { useEffect, useState }  from "react"
import { useSelector, useDispatch } from "react-redux"

import { addItem } from "../store/actions/cart.action"
//import ImageSelector from "../components/ImageSelector"
import {COLORS} from "../constants/colors"
import NewPlaceScreen from "./NewPlaceScreen"


const DetailsScreen = ({ navigation, route  }) => {
  const dispatch = useDispatch()
  const service = useSelector(state => state.products.selected)


  useEffect(() => {
    console.log(route.params)
  }, [])

  const handleAddItem = () => {
    dispatch(addItem(service)) 
    navigation.navigate("CartTab")
  }

  return (
        <View style={styles.container}>
       <Image 
       style={styles.image}
       source={{uri: service.image,
          }}/>
      <Text style={styles.title}>{service.name}</Text>
      <Text style={styles.description}>{service.description}</Text>
      <Text style={styles.price}>Precio: ${service.price} USD</Text>
      <View style = {styles.lineStyle} />
      <Button title="Añadir al carrito" 
      color={COLORS.terciary}
      onPress={handleAddItem} />
      <NewPlaceScreen/>
    
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  lineStyle:{
    borderWidth: 0.5,
    width: "80%",
    borderColor:"#ccc",
    backgroundColor:"#ccc",
    margin:10,
  }, image:{
    height: 120,
    width: "100%"
  },  title: {
    fontFamily: "RobotoBold",
    fontSize: 16,
    marginBottom: 10,
  },
  price: {
    textAlign: "center",
    fontFamily: "RobotoBold",
    color: COLORS.primary,
    paddingTop: 10,
    marginTop: 10,    
  }, 
  description: {
    fontSize: 12,
  }, 
})
