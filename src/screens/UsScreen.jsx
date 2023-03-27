import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/colors'

const UsScreen = (navigation) => {


  return (
    <View style={styles.container}>
        <Image style={{width: "90%", height: 121,}} source={ {uri: "https://www.bodylicious.cl/wp-content/uploads/2020/11/text-1-1.png"}}/>
      <Text style={styles.text3}>Somos un centro de estética integral comprometido con el bienestar y la salud de las personas, especializándonos en diversos tratamientos tanto corporales como faciales. Nuestro compromiso es garantizar la satisfacción de cada clientes, por lo mismo es que siempre estamos en constante capacitación. Solicita tu hora de evaluación gratuita</Text>
      <Image style={{width: 400, height: 180, alignItems: "flex-end", marginBottom: -20,}} source={ {uri: "https://www.bodylicious.cl/wp-content/uploads/2020/10/bg4.jpg"}} />
    </View>

  )
}

export default UsScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.terciary,
    }, text3:{
        marginTop: 10,
        padding: 35,
        color: "#fff",
    }
})