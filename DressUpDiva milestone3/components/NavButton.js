// NAVIGATION BUTTON FOR "DRESS UP DIVA"
import { Pressable, StyleSheet, View, Text } from "react-native";
import Colors from "../constants/colors";

// NAVIGATION BAR FUNCTIONALITIES (REUSABLE)
function NavButton(props){
    return(
        // PRESSABLE COMPONENT 
        <Pressable
            android_ripple={{ color: Colors.primary800}}
            onPress={props.onPress}
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

// EXPORTING THE NAV BUTTON TO USE IN "DRESS UP DIVA"
export default NavButton;

// NAVIGATION BAR STYLING 
const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.accent500,
        width: '40%',
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
        fontFamily: "Precious",
        color: Colors.primary300,
    },

});