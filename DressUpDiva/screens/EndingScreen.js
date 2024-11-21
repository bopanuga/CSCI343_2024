// ENDING SCREEN SCREEN FOR "DRESSUPDIVA" APP
import { View, Text, StyleSheet, Button } from 'react-native';
import Colors from '../constants/colors';

export default function EndingScreen({navigation}){
    return (
        <View styles={styles.container}>
            <Text style={styles.text}> You Look Gorgeous! Again? </Text>
            <Button 
                title="Play Again?"
                onPress={() => navigation.push("Home")}
                style={styles.button}
            />
        </View>
    );
}

// STYLES FOR THE ENDINGSCREEN.JS COMPONENT
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.primary800,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
  });