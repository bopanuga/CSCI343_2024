import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Colors from './constants/colors';
import HomeScreen from './screens/HomeScreen';
import RecipesScreen from './screens/RecipesScreen';
import AddRecipeScreen from './screens/AddRecipeScreen';

// MAIN APP
export default function App() {
  const [fontsLoaded] = useFonts ({
    noteFont: require("./assets/fonts/Note.ttf"),
    paperNote: require("./assets/fonts/Papernotes.ttf"),
    paperNoteSketch: require("./assets/fonts/Papernotes Sketch.ttf"),
    paperNoteBold: require("./assets/fonts/Papernotes Bold.ttf"),
  })
// FUNCTIONALITIES OF THE RECIPE APP
  const [currentScreen, setCurrentScreen] = useState("home");
  const [currentID, setCurrentID] = useState(3);
  const [currentRecipes, setCurrentRecipes] = useState([
    {
      id: 1,
      title: "Recipes To Make List",
      text: "1. Make Spaghetti\n2. Make Rice\n3. Make Tacos\n4. Make Sushi"
    },
    {
      id: 2,
      title: "Recipes To Make List v2",
      text: "1. Make Spaghetti\n2. Make Rice\n3. Make Tacos\n4. Make Sushi"
    }
  ]);

  // SCREEN HANDLER FUNCTIONS
  function homeScreenHandler() {
    setCurrentScreen("home");
  }
  function recipesScreenHandler() {
    setCurrentScreen("recipes");
  }
  function goToAddRecipeScreenHandler() {
    setCurrentScreen("add");
  }

  // THIS FUNCTIONS ADDS A NEW RECIPE PAGE
  function addRecipeScreenHandler(enteredRecipeTitle, enteredRecipeText) {
    setCurrentRecipes((currentRecipes) => {
      return [
        ...currentRecipes,
        { id: currentID, title: enteredRecipeTitle, text: enteredRecipeText },
      ];
    });
    setCurrentID(currentID + 1);
    recipesScreenHandler();
  }
  // THIS FUNCTION DELETES A RECIPE PAGE
  function deleteRecipeHandler(id) {
    setCurrentRecipes((currentRecipes) => {
      return currentRecipes.filter((item) => item.id !== id);
    })
  }

// HOW THE SCREEN WOULD PASS THROUGH EACHOTHER WHEN NAVIGATING
  let screen = <HomeScreen onNext={recipesScreenHandler} />;

  if (currentScreen === "add"){
    screen = <AddRecipeScreen onAdd={addRecipeScreenHandler} onCancel={recipesScreenHandler}/>;
  }

  if (currentScreen === "recipes") {
    screen = (
      <RecipesScreen
        onHome={homeScreenHandler}
        onAdd={goToAddRecipeScreenHandler}
        onDelete={deleteRecipeHandler}
        currentRecipes={currentRecipes}
      />
    );
  }
  
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary800,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
