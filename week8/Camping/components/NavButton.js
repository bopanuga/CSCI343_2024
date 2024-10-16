// NAVIGATION BUTTON FOR CAMPGROUND APPLICATION
import { Pressable, StyleSheet, View, Text, useWindowDimensions } from "react-native";
import Colors from "../constants/colors";

// NAVIGATION BAR FUNCTIONALITIES 
function NavButton(props){
    const {width, height } = useWindowDimensions();

    return (
        <Pressable
            onPress={props.onPress}
             // TEMP STYLES THAT CAN ONLY BE ACTIVATED WHILE PRESSED
            style={({ pressed }) => pressed && styles.pressedItem}
        >
            <View style={styles.buttonContainer}>
                <View style={styles.textContainer}>
                    {/* dynamically setting the font size */}
                    <Text style={[styles.text,{fontSize: width * 0.07}]}>{props.children}</Text>
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
        backgroundColor: Colors.primary500,
        borderRadius: 300,
        width: 1000,
        maxWidth: "70%",
        marginHorizontal: 10,
        marginVertical: 10,
    },
    // when button is pressed it reacts by going opaque 
    pressedItem: {
        opacity: 0.5,
    },
    text: {
        padding: 8, 
        textAlign: "center",
        fontFamily: "camp",
        color: Colors.primary300,
    },

});