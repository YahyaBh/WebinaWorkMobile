import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/Home";
import HomeScreen2 from "./screens/Home2";
import AboutScreen from "./screens/About";
import HomeScreen3 from "./screens/Home3";
import HomeScreen4 from "./screens/Home4";
import Loading from "./screens/Loading/Loading";
import SignUp from "./screens/SignUp";

const Stack = createNativeStackNavigator();



export default function App() {

  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 3000);

  })

  return (loading ? <Loading /> :
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home" component={HomeScreen}

        />
        <Stack.Screen
          options={{
            headerShown: false,

          }}
          name="Home2" component={HomeScreen2}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            presentation: 'modal',
            animationTypeForReplace: 'push',
            animation: 'slide_from_right'
          }}
          name="Home3" component={HomeScreen3}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            presentation: 'modal',
            animationTypeForReplace: 'push',
            animation: 'slide_from_right'
          }}
          name="Home4" component={HomeScreen4}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="About" component={AboutScreen} />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}