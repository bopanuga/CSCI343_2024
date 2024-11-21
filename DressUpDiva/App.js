// APP.JS CODE FOR "DRESS UP DIVA"
// IMPORTING BASIC DEPENDENCIES/COMPONENTS ??
// import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Colors from './constants/colors';
//IMPORTING THE NAVIGATORS
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// IMPORTING ALL "DRESS UP DIVA" SCREENS
import HomeScreen from './screens/HomeScreen';
import AvatarScreen from './screens/AvatarScreen';
import HairScreen from './screens/HairScreen';
import StyleScreen from './screens/StyleScreen';
import EndingScreen from './screens/EndingScreen';


// MAIN FUNCTION OF THE APP BEGINS HERE 
export default function App() {
  // CREATING THE NAVIGATORS 
  const Stack = createNativeStackNavigator();

  
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
