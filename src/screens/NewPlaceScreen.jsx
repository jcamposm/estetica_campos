import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native'
import React, {useState} from 'react'
import ImageSelector from '../components/ImageSelector'
import {useDispatch} from 'react-redux'
import {addPlace} from '../store/actions/places.action'
import {COLORS} from '../constants/colors'

const NewPlaceScreen = ({navigation}) => {

    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [image, setImage] = useState()
 
    const handleTitleChange = text => setTitle(text)

    const handleSave = () =>{ 
        dispatch(addPlace(title, image))
        //navigation.navigate("Direcciones")
    }
    

  return (
    <ScrollView>
        <View style={styles.container}>
            <Text style={styles.label}>Añadir foto para evaluación</Text>
            <TextInput style={styles.input} placeholder="Descripción"
            value={title}
            onChangeText={handleTitleChange}/>
             <ImageSelector onImage={setImage}/>
            <Button title="Guardar foto" color={COLORS.terciary} onPress={handleSave}/>
        </View>
    </ScrollView>
  )
}

export default NewPlaceScreen

const styles = StyleSheet.create({
    container:{
        margin: 30,
    }, label: {
        fontSize: 18,
        marginBottom: 16,
    }, input: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 16,
        pagginHorizontal: 2,
        paddingVertical: 4,
    }
})