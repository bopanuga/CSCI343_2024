// NAVIGATION BUTTON FOR BIKE REPAIR SHOP APP
import { Pressable, StyleSheet, View, Text } from "react-native";
import Colors from "../constants/colors";

// NAVIGATION BAR FUNCTIONALITIES 
function NavButton(props){
    return(
        <Pressable
            // note: "Providing android ripple gives visual response to being clicked"
            android_ripple={{ color: Colors.primary800}}
            // note: "Using the bind keyword we can preconfigure a function with a set input value"
            //        instead of having to create another local function to call the provided function"
            onPress={props.onPress}
             // note: "By providng styling and checking for pressed you can set temporary styles"
            //        that will only be active while presses, This will take effect on IOS and Android"
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