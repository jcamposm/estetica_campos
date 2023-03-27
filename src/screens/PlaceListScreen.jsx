import React, {useLoayoutEffect, useEffect, useLayoutEffect} from 'react'
import{FlatList, View, Text, Button, StyleSheet, ScrollView} from 'react-native'
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
    address={'Foto para evaluación de servicio'}
    onSelect={() => navigation.navigate("PlacesTab")}
    />
    )
  return (
    <ScrollView>
    <View style={styles.container}>
    <FlatList
    data={places}
    keyExtractor = {item => item.id}
    renderItem={renderItem}
    inverted={true}

    />
    </View>
    </ScrollView>
  )
  }

  const styles = StyleSheet.create({
    container: {
    flex: 1,
    height: 600,
    },
  })

  export default PlaceListScreen