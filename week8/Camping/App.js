// IMPORTS FOR APP.JS
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import Colors from './constants/colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import { useCallback } from 'react';


export default function App() {
  // SETTING UP CUSTOM FONTS TO USE
  const [fontsLoaded, fontError] = useFonts({
    camp: require("./assets/fonts/Mountain.ttf")
  });

  // WAIT TILL THE FONTS ARE LOADED ON THE HOMESCREEN IF NOT THEN HIDE THE SPALSH SCREEN
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError){
      await SplashScreen.hideAsync();
    }
  })

  // RENDERING THE HOMESCREEEN
  let screen = <HomeScreen />

  //IF FONTS ARE LOT YET LOADED, AND THERE IS NO ERORR, RENDER NOTHING
  if(!fontsLoaded && !fontError){
    return null;
  } else {
    return (
      <>
        <StatusBar style="light" />
        <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
      </>
    );
  }
}

// STYLESHEET FOR CONTAINER STYLING
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent300 
  },
});
