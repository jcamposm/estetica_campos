import { useFonts } from "expo-font"
import { NavigationContainer } from "@react-navigation/native"
import BottomTabNavigator from "./src/navigation/BottomTabNavigator"
import { Provider } from "react-redux"

import store from "./src/store"

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
    RobotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
    RobotoThin: require('./assets/fonts/Roboto-Thin.ttf')
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </Provider>
  )
}
