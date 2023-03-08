import { createNativeStackNavigator } from "@react-navigation/native-stack"
import PlaceListScreen from "../screens/PlaceListScreen"

const Stack = createNativeStackNavigator()

export default PlaceNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Place"
      screenOptions={{
        headerShadowVisible: false,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Direcciones"
        component={PlaceListScreen}
        options={({navigation})=>({
          title: "Direcciones",
        })}
      />
    </Stack.Navigator>
  )
}
