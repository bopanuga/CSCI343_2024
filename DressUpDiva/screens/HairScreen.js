// HAIR SELECTION SCREEN FOR "DRESSUPDIVA" APP
import { View, Text, StyleSheet, Button } from 'react-native';
import Colors from '../constants/colors';


export default function HairScreen({navigation}){
    return (
        <View styles={styles.container}>
            <Text style={styles.text}> Please Select Your Hairstyle </Text>
            <Button 
                title="Style"
                onPress={() => navigation.push("Style")}
                style={styles.button}
             />
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
      justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
  });