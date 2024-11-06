// IMPORTING BASICS
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback } from 'react';
// IMPORTING OUR NAVIGATORS
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// IMPORTING ALL OTHER SCREENS
import BooksmarksScreen from './screens/BookmarksScreen';
import NewsDetailsScreen from './screens/NewsDetailsScreen';
import OtherNewsScreen from './screens/OtherNewsScreen';
import UsNewsScreen from './screens/UsNewsScreen';
import WorldNewsScreen from './screens/WorldNewsScreen';
// IMPORTING COLORS
import Colors from './constants/colors.js';
// IMPORTING ENTYPO FOR 
import { Entypo, MaterialIcons, MaterialCommunityIcons, FontAwesome,Ionicons } from "@expo/vector-icons";
import BookmarksContextProvider from './store/context/bookmarks.context.js';

// CREATING THE THE THREE NAVIGATORS
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

// SO IT DOESNT HAVE TO RE RENDER EVERYTIME 
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="News"
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        headerTitleStyle: {
          fontFamily: "nolluqa",
          fontSize: 40,
          color: Colors.accent800
        },
        sceneContainerStyle: {backgroundColor: Colors.primary300},
        drawerContentStyle: {backgroundColor: Colors.primary500},
        drawerInactiveTintColor: Colors.primary300,
        drawerActiveTintColor: Colors.accent500,
        drawerActiveBackgroundColor: Colors.primary800,
      }}
    >
      <Drawer.Screen
        name="Listings"
        component={TabsNavigator}
        options={{
          title: "All News",
          drawerLabel: "News",
          drawerIcon: ({color, size}) => (
            <Entypo name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="Bookmarked News"
        component={BooksmarksScreen}
        options={{
          title: "Saved News",
          drawerLabel: "Saved News",
          drawerIcon: ({color, size}) => (
            <Entypo name="bookmark" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

// TAB NAVIGATOR 
function TabsNavigator(){
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveBackgroundColor: Colors.primary800,
        tabBarActiveTintColor: Colors.accent500,
        tabBarInactiveBackgroundColor: Colors.primary500,
        tabBarInactiveTintColor: Colors.primary300,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "playfairBold",
        },
        tabBarStyle: {
          backgroundColor: Colors.primary500,
        },
      }}
    >
      <Tabs.Screen
        name="UsNews"
        component={UsNewsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="globe" size={size} color={color} />
          ),
          tabBarLabel: "US",
        }}
      />
      <Tabs.Screen
        name="WorldNews"
        component={WorldNewsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Ionicons name="globe-outline" size={size} color={color} />
          ),
          tabBarLabeL: "world",
        }}
      />
      <Tabs.Screen
        name="OtherNews"
        component={OtherNewsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Entypo name="info-with-circle" size={size} color={color} />
          ),
          tabBarLabeL: "other",
        }}
      />
    </Tabs.Navigator>
  )
}

// EXPORTS THE SCREENS INTO APP.JS
export default function App() {
  // IMPORTING AND SETTING UP FONTS FOR NEWS APP
  const [fontsLoaded, fontError] = useFonts({
    playfair: require("./assets/fonts/Playfair.ttf"),
    playfairBold: require("./assets/fonts/PlayfairBold.ttf"),
    playfairBoldItalic: require("./assets/fonts/PlayfairBoldItalic.ttf"),
    nolluqa: require("./assets/fonts/NolluqaRegular.otf"),
  });

  // HANDLES LAYOUT OF THE ROOT VIEW AND HIDE SPLASH SCREEN
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  })

  // FUNCTION TO HANDLE IF FONTS ARE LOADED CORRECTLY
  if (!fontsLoaded && !fontError) {
    return null;
  } else {
  // RETURN STATEMENT WITH DIFFRENT STACKED SCREENS
    return (
      <>
        <StatusBar style="auto" />
        <BookmarksContextProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="DrawerScreen"
              screenOptions={{
                headerTintColor: Colors.primary300,
                headerStyle: {backgroundColor: Colors.primary500},
                contentStyle: {backgroundColor: "black"},
              }}       
            >
              <Stack.Screen
                name="DrawerScreen"
                component={DrawerNavigator}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="NewsDetail"
                component={NewsDetailsScreen}
                options={{
                  headerBackTitleVisible: false,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </BookmarksContextProvider>
      </>
    );
  }
}

// STYLES FOR THE APP.JS COMPONENT
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
