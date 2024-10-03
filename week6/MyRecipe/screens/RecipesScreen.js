import { Image, View, StyleSheet, FlatList, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../componets/Title";
import NavButton from "../componets/NavButton";
import Colors from "../constants/colors";
import RecipeItem from "../componets/RecipesItems";
import RecipeView from "../modals/RecipeView";
import{ useState } from "react";

function RecipesScreen(props) {
    // SET AREA (HOME)SCREEN BOUNDARIES
    const insets = useSafeAreaInsets();

    //MANAGES THE VISIBILITY OF THE RECIPE MODAL
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [modalRecipeTitle, setModalRecipeTitle] = useState("");
    const [modalRecipeText, setModalRecipeText] = useState("");


    //OPENS THE RECIPE MODAL
    function recipeViewHandler(title, text){
        setModalRecipeTitle(title);
        setModalRecipeText(text);
        setModalIsVisible(true);
    }
    //CLOSES THE RECIPE MODAL
    function closeRecipeViewHandler() {
        setModalIsVisible(false);
    }

    return (
        <View 
            style={[
                styles.rootContainer,
                {
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom,
                    paddingLeft: insets.left,
                    paddingRight: insets.right,
                },
            ]}
        >
        
            <View style={styles.titleContainer}>
                <Title>Current Recipes</Title>
            </View>

            <View style={styles.itemContainer}>
                <FlatList
                    data={props.currentRecipe}

                    keyExtractor={(item, index) => {
                        return item.id;
                    }}
                    alwaysBounceVertical={false}
                    renderItem={(itemData) => {
                        return (
                            <RecipeItem
                            id={itemData.item.id}
                            title={itemData.item.title}
                            onView={recipeViewHandler.bind(this, itemData.item.title, itemData.item.text)}
                            onDelete={props.onDelete.bind(this, itemData.item.id)}
                            />
                        );
                    }}
                />
            </View>

            <RecipeView 
                visible={modalIsVisible}
                title={modalRecipeTitle}
                text={modalRecipeText}
                onClose={closeRecipeViewHandler}
            />

           <View style={styles.navButtonContainer}>
           <View style={styles.navButton}>
                <NavButton onNext={props.onAdd}>Add New Recipe</NavButton>
            </View>
            <View style={styles.navButton}>
                <NavButton onNext={props.onHome}> Return Home</NavButton>
            </View>
           </View>            
        </View>
    );
}

export default RecipesScreen;

// STYLE SHEET FOR RECIPESSCREEN
const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        width: "100%",
    },
    titleContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
    },
    itemContainer:{
        flex: 6,
        paddingHorizontal: 10,
    },
    navButtonContainer:{
        flex: 2,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    navButton:{
        marginHorizontal: 10,
    },
});