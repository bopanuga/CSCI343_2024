import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './screens/HomeScreen';
import DestinationOverviewScreen from './screens/DestinationsOverviewScreen';
import Colors from './constants/colors.js';

// STACK NAVIGATOR FOR SWITCHING SCREENS
const Stack = createNativeStackNavigator();

export default function App() {
  // IMPORTING AND SETTING UP FONTS FOR DESTINATION APP
  const [fontsLoaded, fontError] = useFonts({
    mountain: require("./assets/fonts/Mountain.ttf")
  });

  // HANDLES LAYOUT OF THE ROOT VIEW AND HIDE SPLASH SCREEN
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError){
      await SplashScreen.hideAsync();
    }
  },[fontsLoaded, fontError]);
  
  // FUNCTION TO HANDLE IF FONTS LOADED CORRECTLY
  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
      <>
        {/* HANDLES VISIBILITY OF SPLASH SCREEN */}
        <StatusBar style="auto" /> 
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='HomeScreen'
            screenOptions={{
              headerStyle: {backgroundColor: Colors.primary500},
              headerTintColor: Colors.primary300,
              headerTitleStyle: {fontFamily: "mountain", fontSize: 40},
              contentStyle: {backgroundColor: Colors.primary800},
            }}          
          >
            {/* DEFINE HOMESCREEN IN STACK NAVIGATOR*/}            
            <Stack.Screen
              name="HomeScreen"
              component={Homescreen}
              options={{
                title: "Destination Locations"
              }}            
            />
            {/* DEFINE DESTINATION OVERVIEW SCREEN IN STACK NAVIGATOR */}
            <Stack.Screen
              name="DestinationsOverviewScreen"
              component={DestinationOverviewScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  } 
}

  // STYLE SHEET FOR APP.JS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
