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
        <View style={styles.container}>
            <Text style={styles.label}>Añadir foto para evaluación</Text>
            <TextInput style={styles.input} placeholder="Descripción"
            value={title}
            onChangeText={handleTitleChange}/>
             <ImageSelector onImage={setImage}/>
            <Button title="Subir foto" color={COLORS.terciary} onPress={handleSave}/>
        </View>
  )
}

export default NewPlaceScreen

const styles = StyleSheet.create({
    container:{
        margin: 30,
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        borderRadius: 10,
        width: 300,
    }, label: {
        fontSize: 14,
        fontFamily: "RobotoBold",
        marginBottom: 10,
        textAlign: "center",
    }, input: {
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 16,
        padding: 2,
        paddingLeft: 5,
    }
})