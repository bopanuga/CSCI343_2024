// NAVIGATION BUTTON FOR RECIPE APP
import { Pressable, StyleSheet, View, Text } from "react-native";
import Colors from "../constants/colors";

// NAVIGATION BAR FUNCTIONALITIES 
function NavButton(props){
    return(
        <Pressable
            onPress={props.onNext}
            style={({ pressed }) => pressed && styles.pressedItem}
        >
            <View style={styles.buttonContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{props.children}</Text>
                </View>
            </View>
        </Pressable>
    );

}

export default NavButton;

// NAVIGATION BAR STYLING 
const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.accent500,
        width: 150,
        height: 75,
        margin: 8,
        borderRadius: 6,
    },
    pressedItem: {
        opacity: 0.8,
    },
    text: {
        padding: 8, 
        fontSize: 25,
        textAlign: "center",
        fontFamily: "paperNoteBold",
        color: Colors.primary300,
    },

});