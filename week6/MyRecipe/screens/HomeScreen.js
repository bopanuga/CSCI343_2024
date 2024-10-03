import { Image, View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../componets/Title";
import NavButton from "../componets/NavButton";
import Colors from "../constants/colors";


function HomeScreen(props) {
    // SET AREA (HOME)SCREEN BOUNDARIES
    const insets = useSafeAreaInsets();

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
                <Title> Savory Secrets </Title>
            </View>

            <View style={styles.imageContainer}>
                <Image
                source={require("../assets/images/recipe.jpeg")} //LOADS IMAGE
                style={styles.image}
                />
            </View>

            <View style={styles.navButtonContainer}>
                <NavButton onNext={props.onNext}>Go To Recipe's</NavButton>
            </View>
        </View>
    );
}

export default HomeScreen;

// STYLE SHEET FOR HOMESCREEEN
const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        width: "90%",
    },
    titleContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
    },
    imageContainer:{
        flex: 2,
        justifyContent: "center",
        borderWidth: 4,
        borderRadius: 55,
        borderColor: Colors.accent500,

    },
    image:{
        height: "100%",
        width: "100%",
        borderRadius: 50,
        resizeMode: "stretch",

    },
    navButtonContainer:{
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },

});