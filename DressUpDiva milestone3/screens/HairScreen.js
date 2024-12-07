// HAIR SELECTION SCREEN FOR "DRESSUPDIVA" APP
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import Colors from '../constants/colors';
import { useState } from 'react';


export default function HairScreen({navigation, route}){
    const { characterName, selectedAvatar } = route.params;
    const [selectedHair, setSelectedHair] = useState(null);

    const selectHair = (hair) => {
        setSelectedHair(hair);
        navigation.push('Style', { characterName, selectedAvatar, selectedHair: hair });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Please select your desired hairstyle. </Text>
            <View style={styles.hairContainer}>
                <TouchableOpacity onPress={() => selectHair('hair1')} style={styles.hairRows}>
                <Image source={require('../assets/images/hair/hair1.png')} style={styles.hair} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => selectHair('hair2')} style={styles.hairRows}>
                    <Image source={require('../assets/images/hair/hair2.png')} style={styles.hair} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => selectHair('hair3')} style={styles.hairRows}>
                    <Image source={require('../assets/images/hair/hair3.png')} style={styles.hair} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => selectHair('hair4')} style={styles.hairRows}>
                    <Image source={require('../assets/images/hair/hair4.png')} style={styles.hair} />
                </TouchableOpacity> 
            </View>
            
            {/* <Button 
                title="Style"
                onPress={() => navigation.push("Style")}
                style={styles.button}
             /> */}
             {/* <Button 
                title="Back to Home" 
                onPress={() => navigation.goback({HomeScreen})}
             /> */}
        </View>
    );
}

// STYLES FOR THE HAIRSCREEN.JS COMPONENT
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
        marginBottom: 0,
    },
    hair: {
        width: 100, 
        height: 100, 
        margin: 10,
        marginBottom: 1,
        marginTop: 1,
    },
    hairContainer: {
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        justifyContent: 'center',
    },
    hairRows: {
        margin: 45,
    }
  });