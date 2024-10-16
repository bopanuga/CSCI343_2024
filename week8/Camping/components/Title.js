// TITLE COMPONENT FOR CAMPGROUND APPLICATION

import { Text, StyleSheet, useWindowDimensions } from 'react-native';
import Colors from '../constants/colors';

function Title(props){
    //return the windows dimensions
    const { width, height } = useWindowDimensions();

    // sets the font size based of the dimensions of the screen
    return <Text style={[styles.title,{fontSize: width * 0.13}]}>{props.children}</Text>

}

export default Title;
 // TITLE BAR STYLING
const styles = StyleSheet.create({
    title: {
        fontFamily: "camp",
        fontSize: 50,
        color: Colors.primary500,
        textAlign: "center",
    },
});