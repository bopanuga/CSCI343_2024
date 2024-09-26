import { Pressable, StyleSheet, View, Text } from "react-native";
import Colors from "../constants/colors";


function NavButton(props){
    return(
        <Pressable
            android_ripple={{color: "grey"}}
            onPress={props.onPress}>
            <View style={styles.buttonContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{props.children}</Text>
                </View>
            </View>
        </Pressable>
    )

}

export default NavButton;

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        borderRadious: 300,
        borderColor: Colors.primary500,
        borderWidth: 3,
        backgroundColor: Colors.primary500,
        width: 100,
        margin: 10,
    },
    textContainer: {},
    text: {
        padding: 8, 
        fontSize: 25,
        textAlign: "center",
        fontFamily: "squealer-embossed"
    },
});