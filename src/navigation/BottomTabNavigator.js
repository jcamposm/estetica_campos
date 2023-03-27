import { StyleSheet, View, Text } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from "@expo/vector-icons/Ionicons"
import { COLORS } from "../constants/colors"

import ShopNavigator from "./ShopNavigator"
import CartNavigator from "./CartNavigator"
import OrdersNavigator from "./OrdersNavigator"
import PlaceNavigator from "./PlaceNavigator"

const BottomTabs = createBottomTabNavigator()

export default BottomTabNavigator = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <BottomTabs.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          tabBarIcon: () => (
            <View style={styles.icon}>
              <Ionicons name="home" size={25} color="white" />
              <Text style={styles.Text}>Tienda</Text>
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          tabBarIcon: () => (
            <View style={styles.icon}>
              <Ionicons name="cart" size={25} color="white" />
              <Text style={styles.Text}>Carrito</Text>
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          tabBarIcon: () => (
            <View style={styles.icon}>
              <Ionicons name="list" size={25} color="white" />
              <Text style={styles.Text}>Ordenes</Text>
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="PlacesTab"
        component={PlaceNavigator}
        options={{
          tabBarIcon: () => (
            <View style={styles.icon}>
              <Ionicons name="image" size={25} color="white" />
              <Text style={styles.Text}>Mis fotos</Text>
            </View>
          ),
        }}
      />
    </BottomTabs.Navigator>
    
  )
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: COLORS.primary,
    paddingTop: 15,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    height: 85,
    position: "absolute",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  icon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  }, Text:{
    color: "white",
  }
})
