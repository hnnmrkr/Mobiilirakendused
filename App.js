import React, { useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { colors } from "./src/utils/colors";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Splash from "./src/screens/auth/splash";
import Signup from "./src/screens/auth/sign-up";
import Signin from "./src/screens/auth/sign-in";

const Stack = createNativeStackNavigator();

const theme = {
  colors: {
    background: colors.white
  },
};

const App = () => {
  return (
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
          <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
          <Stack.Screen name="Signin" component={Signin} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default React.memo(App)