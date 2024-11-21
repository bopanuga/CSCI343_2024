// STYLE SELECTION SCREEN FOR "DRESSUPDIVA" APP
import { View, Text, StyleSheet, Button } from 'react-native';
import Colors from '../constants/colors';

export default function StyleScreen({navigation}){
    return (
        <View styles={styles.container}>
            <Text style={styles.text}> Please Select Your Style </Text>
            <Button 
                title="End"
                onPress={() => navigation.push("End")}
                style={styles.button}
             />
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
      justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
  });