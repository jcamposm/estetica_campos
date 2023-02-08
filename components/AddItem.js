import { StyleSheet, TextInput, View, Button } from "react-native"
import React from "react"

const AddItem = ({ onChange, textValue, onAddItem, roboto }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Escribe tus especificaciones"
        style={{...styles.addItemInput, ...roboto}}
        onChangeText={onChange}
        value={textValue}
      />
      <Button title="Añadir" onPress={onAddItem} />
    </View>
  )
}

export default AddItem

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addItemInput: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    width: "80%",
    height: 45,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
})