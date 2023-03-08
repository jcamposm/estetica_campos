import React from 'react'
import{FlatList, View, Text, Button} from 'react-native'
import {useSelector} from 'react-redux'
import PlaceItem from '../components/PlaceItem'

const PlaceListScreen = ({navigation})=>{
    const places = useSelector(state => state.places.places)
  
    const renderItem = ({item}) => (
    <PlaceItem
    title={item.title}
    image={item.image}
    address="123 Street, city, country"
    onSelect={() => navigation.navigate("PlacesTab")}/>
    )
  return (
    <View>
    <FlatList
    data={places}
    keyExtractor = {item => item.id}
    renderItem={renderItem}
    />
    <Button title="BOTON "onPress={console.log(places)}/>
    </View>
  )
  }

  export default PlaceListScreen