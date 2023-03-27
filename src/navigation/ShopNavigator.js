import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import CategoriesScreen from "../screens/CategoriesScreen"
import ProductScreen from "../screens/ProductsScreen"
import DetailsScreen from "../screens/DetailsScreen"
import GalleryScreen from "../screens/GalleryScreen"
import UsScreen from "../screens/UsScreen"

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
          title: "Bodylicious - Estética Integral"
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
      <Stack.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{title: "Galería",
        }}
      />
      <Stack.Screen
        name="Us"
        component={UsScreen}
        options={{title: "Quiénes Somos",
        }}
      />
    </Stack.Navigator>
  )
}
