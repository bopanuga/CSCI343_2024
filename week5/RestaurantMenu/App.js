import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useState } from 'react';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import Colors from './constants/colors';

export default function App() {
  //Set up our custom fonts
  const [fontsLoaded] = useFonts({
    "squealer": require ("./assets/fonts/Squaler.otf"),
    "squealer-embossed": require ("./assets/fonts/SqualerEmbossed.otf")
  })
 
// SET STATE VARIABLE FOR THE CURRENT SCREEN
const [currentScreen, setCurrentScreen] = useState("home");

function menuScreenHandler() {
  setCurrentScreen("menu");
}
function homeScreenHandler() {
  setCurrentScreen("home");
}

// DETERMINE WHICH SCREEN TO BE ON
let screen = <HomeScreen onNext={homeScreenHandler}/>;


if (currentScreen === "menu"){
  screen = <MenuScreen onNext={menuScreenHandler}/>;
}

//  RETURNS 
  return (
   <>
    <StatusBar style="auto"/>
    <SafeAreaProvider style={styles.container}>
                {screen}
    </SafeAreaProvider> 
  </>   
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    width: 400,
    backgroundColor: Colors.accent500,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
