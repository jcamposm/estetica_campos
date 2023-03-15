import React, {useLoayoutEffect, useEffect, useLayoutEffect} from 'react'
import{FlatList, View, Text, Button} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import PlaceItem from '../components/PlaceItem'

import * as addressAction from "../store/actions/places.action"

const PlaceListScreen = ({navigation})=>{
    const dispatch = useDispatch()
    const places = useSelector(state => state.places.places)
  
    useLayoutEffect(()=> {}, [navigation])

    useEffect(() =>{dispatch(addressAction.loadAddress())}, [])

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