import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/colors.js'
import Ionicons from "@expo/vector-icons/Ionicons"


const PlaceItem = ({title, image, address, onSelect,}) => {
  return (
    <TouchableOpacity
    onPress={onSelect}
    style={styles.placeItem}>
        <Image style={styles.image} source={{uri:image}}/>
    <View style={styles.info}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.address}>{address}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default PlaceItem

const styles = StyleSheet.create({
placeItem: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
}, image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: COLORS.primary,
}, info: {
    maginLeft: 25,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
}, title: {
    color: COLORS.primary,
    fontSize: 18,
    marginBottom: 6,
}, address: {
    color: '#777',
    fontSize: 16,
}

})