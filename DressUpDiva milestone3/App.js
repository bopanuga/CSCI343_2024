// APP.JS CODE FOR "DRESS UP DIVA"
// IMPORTING BASIC DEPENDENCIES/COMPONENTS
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Colors from './constants/colors';
import React, { useState, useCallback } from 'react';
import { useFonts } from 'expo-font';

//IMPORTING THE NAVIGATORS
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// IMPORTING ALL "DRESS UP DIVA" SCREENS
import HomeScreen from './screens/HomeScreen';
import AvatarScreen from './screens/AvatarScreen';
import HairScreen from './screens/HairScreen';
import StyleScreen from './screens/StyleScreen';
import EndingScreen from './screens/EndingScreen';

// CREATING THE NAVIGATORS 
  const Stack = createNativeStackNavigator();

// MAIN FUNCTION OF THE APP BEGINS HERE 
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    precious: require("./assets/fonts/Precious.ttf")
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError){
      await SplashScreen.hideAsync();
    }
  },[fontsLoaded, fontError]);
  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return(
      <>
        <StatusBar style="auto" /> 
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName='Dress Up Diva'
              screenOptions={{
                headerStyle: {backgroundColor: Colors.primary500},
                headerTintColor: Colors.primary300,
                headerTitleStyle: {fontFamily: "precious", fontSize: 40},
                contentStyle: {backgroundColor: Colors.primary800},
              }}          
            >
              {/* DEFINE HOMESCREEN IN STACK NAVIGATOR*/}            
              <Stack.Screen
                name="Dress Up Diva"
                component={HomeScreen}
      
              />
              <Stack.Screen
                name="Avatar"
                component={AvatarScreen}
              />
              <Stack.Screen
                name="Hair"
                component={HairScreen}
              />
              <Stack.Screen
                name="Style"
                component={StyleScreen}
              />
              {/* DEFINE DESTINATION OVERVIEW SCREEN IN STACK NAVIGATOR */}
              <Stack.Screen
                name="Final Look"
                component={EndingScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
      </>
    );
  }



  // RETURNS ALL STACKED SCREENS FOR "DRESS UP DIVA"
  return (
    <>
      <StatusBar style="auto" />
        <SafeAreaProvider style={{flex: 1}}> 
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  title: "Dress Up Diva",
                  headerStyle: {
                    backgroundColor: Colors.primary800,
                  },
                  headerTintColor: Colors.primary300,
                  headerTintStyle: {
                    fontWeight: 'bold',
                  },
                }}
              />
              <Stack.Screen 
                name="Avatar" 
                component={AvatarScreen}
                options={{
                  title: "Dress Up Diva",
                  headerStyle: {
                    backgroundColor: Colors.primary800,
                  },
                  headerTintColor: Colors.primary300,
                  headerTintStyle: {
                    fontWeight: 'bold',
                  },
                }}
                />
              <Stack.Screen 
                name="Hair" 
                component={HairScreen}
                options={{
                  title: "Dress Up Diva",
                  headerStyle: {
                    backgroundColor: Colors.primary800,
                  },
                  headerTintColor: Colors.primary300,
                  headerTintStyle: {
                    fontWeight: 'bold',
                  },
                }}
                />
              <Stack.Screen 
                name="Style" 
                component={StyleScreen}
                options={{
                  title: "Dress Up Diva",
                  headerStyle: {
                    backgroundColor: Colors.primary800,
                  },
                  headerTintColor: Colors.primary300,
                  headerTintStyle: {
                    fontWeight: 'bold',
                  },
                }}
              
              />
              <Stack.Screen 
                name="End" 
                component={EndingScreen}
                options={{
                  title: "Dress Up Diva",
                  headerStyle: {
                    backgroundColor: Colors.primary800,
                  },
                  headerTintColor: Colors.primary300,
                  headerTintStyle: {
                    fontWeight: 'bold',
                  },
                }}
                />          
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});