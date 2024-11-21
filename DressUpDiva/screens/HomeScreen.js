// HOMESCREEN FOR "DRESSUPDIVA" APP
import { View, Text, StyleSheet, Button } from 'react-native';
import Colors from '../constants/colors';

export default function HomeScreen({navigation}){
    return (
        <View styles={styles.container}>
            <Text style={styles.text}> Welcome to Dress Up Diva! </Text>
            <Button 
                title="Lets Dress Up!" 
                onPress={() => navigation.push("Avatar")}
                style={styles.button}
             />
        </View>
    );
}

// STYLES FOR THE HOMESCREEN.JS COMPONENT
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
        fontFamily: ""
    },
    button: {
        flex: 1,
        alignItems: "center",

    }
  });