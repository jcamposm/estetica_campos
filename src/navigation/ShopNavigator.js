import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import CategoriesScreen from "../screens/CategoriesScreen"
import ProductScreen from "../screens/ProductsScreen"
import DetailsScreen from "../screens/DetailsScreen"

const Stack = createNativeStackNavigator()

export default ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerShadowVisible: false,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "Mi estética Online",
        }}
      />
      <Stack.Screen
        name="Products"
        component={ProductScreen}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  )
}
