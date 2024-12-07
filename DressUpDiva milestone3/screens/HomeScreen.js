// HOMESCREEN FOR "DRESSUPDIVA" APP
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert} from 'react-native';
import Colors from '../constants/colors';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons'

export default function HomeScreen({navigation}){
    const [characterName, setCharacterName] = useState(''); 
    const [error, setError] = useState('');
    

    const handlePress = () => { 
        if (characterName.trim().length === 0) { 
            setError('Your diva needs a name!'); 
            Alert.alert('Invalid Input', 'Please enter your diva name.'); 
        } 
        else { 
            setError(''); 
            navigation.push('Avatar', { characterName }); 
        } 
    };
    return (
        <View style={styles.container}>
            {/* <Icon name="checkmark-circle" size={100} color={Colors.primary300} 
            /> */}
            {/* <Text style={styles.text}>Dress Up Diva</Text> */}
            <Image source={require('../assets/images/dud-logo.png')} style={styles.logo} />
            <TextInput style={styles.input} 
                placeholder="Enter your diva's name" 
                placeholderTextColor={Colors.primary300}
                value={characterName} 
                onChangeText={(text) => setCharacterName(text)} 
                />
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Dress Up!</Text>
            </TouchableOpacity>
        </View>
    );
}

// STYLES FOR THE HOMESCREEN.JS COMPONENT
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.primary500,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        fontSize: 50,
        fontWeight: "bold",
        marginTop: 100,
        marginBottom: 1,
    },
    button: {
        flex: 1,
        alignItems: "center",
        backgroundColor: Colors.accent500,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginTop: 100,
        marginBottom: 120,
    },
    buttonText: {
        color: Colors.primary300,
        fontSize: 20,
        textAlign: "center",
        fontWeight: 'bold',
    },
    input: { 
        height: 40, 
        borderColor: Colors.primary300, 
        borderWidth: 1, 
        borderRadius: 5, 
        paddingHorizontal: 100, 
        color: Colors.primary300, 
        marginTop: 1,
        marginBottom: 1, 
        width: '90%', 
    }, 
    errorText: { 
        color: Colors.primary800, 
        marginBottom: 16, 
    },
    logo: {
        width: 500,
        height: 400,
        marginTop: 20,
        marginBottom: 24,
    }

    
  });