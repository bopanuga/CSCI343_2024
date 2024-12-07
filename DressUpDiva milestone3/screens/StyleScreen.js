// STYLE SELECTION SCREEN FOR "DRESSUPDIVA" APP
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import Colors from '../constants/colors';
import { useState } from 'react';

export default function StyleScreen({navigation, route}){
    const { characterName, selectedAvatar, selectedHair } = route.params;
    const [selectedStyle, setSelectedStyle] = useState(null); 
    
    const selectStyle = (style) => { 
        setSelectedStyle(style); 
        navigation.push('Final Look', { characterName, selectedAvatar, selectedHair, selectedStyle: style });
    };
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Please select your desired style. </Text>
            <View style={styles.styleContainer}>
                <TouchableOpacity onPress={() => selectStyle('dress1')} style={styles.styleRow}> 
                    <Image source={require('../assets/images/clothing/dress1.png')} style={styles.style} /> 
                </TouchableOpacity>
                <TouchableOpacity onPress={() => selectStyle('dress2')} style={styles.styleRow}> 
                    <Image source={require('../assets/images/clothing/dress2.png')} style={styles.style} /> 
                </TouchableOpacity>
                <TouchableOpacity onPress={() => selectStyle('dress3')} style={styles.styleRow}> 
                    <Image source={require('../assets/images/clothing/dress3.png')} style={styles.style} /> 
                </TouchableOpacity>
                <TouchableOpacity onPress={() => selectStyle('dress4')} style={styles.styleRow}> 
                    <Image source={require('../assets/images/clothing/dress4.png')} style={styles.style} /> 
                </TouchableOpacity>
            </View>
            {/* <Button 
                title="End"
                onPress={() => navigation.push("End")}
                style={styles.button}
             /> */}
             {/* <Button 
                title="Back to Home" 
                onPress={() => navigation.push("Home")}
             /> */}
        </View>
    );
}

// STYLES FOR THE STYLESCREEN.JS COMPONENT
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.primary800,
      alignItems: 'center',
      //justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 16,
        marginBottom: 1,
    },
    style: { 
        width: 100, 
        height: 100, 
        margin: 53,
        marginBottom: 1, 
    },
    styleContainer: {
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        justifyContent: 'center',
    },
    styleRows: {
        margin: 10,
    }
  });