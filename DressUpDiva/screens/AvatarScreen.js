// AVATAR SELECTION SCREEN FOR "DRESSUPDIVA" APP
import { View, Text, StyleSheet, Button } from 'react-native';
import Colors from '../constants/colors';
import HairScreen from './HairScreen';
import HomeScreen from './HomeScreen';

export default function AvatarScreen({navigation}){
    return (
        <View styles={styles.container}>
            <Text style={styles.text}> Please Select Your Avatar </Text>
            <Button 
                title="Select Hair" 
                onPress={() => navigation.push("Hair")}
                style={styles.button}
             />
             {/* <Button 
                title="Back to Home" 
                onPress={() => navigation.goback({HomeScreen})}
             /> */}
        </View>
    );
}

// STYLES FOR THE AVATARSCREEN.JS COMPONENT
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