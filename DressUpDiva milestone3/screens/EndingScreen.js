// ENDING SCREEN SCREEN FOR "DRESSUPDIVA" APP
import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../constants/colors';
import NavButton from '../components/NavButton';

const avatarImages = { 
    avatar1: require('../assets/images/avatars/avatar1.png'), 
    avatar2: require('../assets/images/avatars/avatar2.png'), 
    avatar3: require('../assets/images/avatars/avatar3.png'), 
    avatar4: require('../assets/images/avatars/avatar4.png'), 
};
const hairImages = { 
    hair1: require('../assets/images/hair/hair1.png'), 
    hair2: require('../assets/images/hair/hair2.png'), 
    hair3: require('../assets/images/hair/hair3.png'), 
    hair4: require('../assets/images/hair/hair4.png'), 
};
const styleImages = { 
    dress1: require('../assets/images/clothing/dress1.png'), 
    dress2: require('../assets/images/clothing/dress2.png'), 
    dress3: require('../assets/images/clothing/dress3.png'), 
    dress4: require('../assets/images/clothing/dress4.png'), 
};

export default function EndingScreen({navigation, route}){
    const { characterName, selectedAvatar, selectedHair, selectedStyle } = route.params;
    
    console.log('name: ', {characterName});
    console.log('avataar: ', {selectedAvatar});
    return (
        <View style={styles.container}>
            <Text style={styles.text}> You look beautiful {characterName}!</Text>
            
            {selectedAvatar && (
                <Image source={avatarImages[selectedAvatar]} style={styles.avatar} />
            )}
            {selectedHair && (
                <Image source={hairImages[selectedHair]} style={styles.hair} />
            )}
            {selectedStyle && (
                <Image source={styleImages[selectedStyle]} style={styles.dress} />
            )}
            <NavButton onPress={() => navigation.push("Dress Up Diva")} style={styles.button}>
            Play Again?
            </NavButton>
        </View>
    );
}

// STYLES FOR THE ENDINGSCREEN.JS COMPONENT
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

    avatar: {
        margin: 10, 
        width: 300, 
        height: 300, 
        position: 'absolute',
        top: 200,
        left: 50
    },
    hair: {
        margin: 10, 
        width: 60, 
        height: 60, 
        position: 'absolute',
        top: 195,
        left: 171
    },
    dress: {
        margin: 10, 
        width: 280, 
        height: 280, 
        position: 'absolute',
        top: 220,
        left: 61
        
    },
    name: {
        fontSize: 50,
    }, 

  });