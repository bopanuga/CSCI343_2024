// AVATAR SELECTION SCREEN FOR "DRESSUPDIVA" APP
import { View, Text, StyleSheet, TouchableOpacity, Image, route, FlatList, Pressable } from 'react-native';
import { useState } from 'react'
import Colors from '../constants/colors';
import HomeScreen from './HomeScreen';


export default function AvatarScreen({navigation, route}){
    const { characterName } = route.params;
    const [selectedAvatar, setSelectedAvatar] = useState(null);

    const selectAvatar = (avatar) => {
        setSelectedAvatar(avatar);
        navigation.push('Hair', { characterName, selectedAvatar: avatar });
    }

    const avatarData = [ 
        { id: 'avatar1', src: require('../assets/images/avatars/avatar1.png') }, 
        { id: 'avatar2', src: require('../assets/images/avatars/avatar2.png') }, 
        { id: 'avatar3', src: require('../assets/images/avatars/avatar3.png') }, 
        { id: 'avatar4', src: require('../assets/images/avatars/avatar4.png') }, 
    ];

    const renderItem = ({ item }) => ( 
    <TouchableOpacity onPress={() => selectAvatar(item.id)} style={styles.avatarWrapper}> 
        <Image source={item.src} style={styles.avatar} /> 
    </TouchableOpacity> );

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Select your desired avatar. </Text>
            <FlatList data={avatarData} 
            renderItem={renderItem} 
            keyExtractor={item => item.id} 
            numColumns={2} 
            contentContainerStyle={styles.avatarContainer} />
            <Pressable 
                title="Select Hair" 
                onPress={() => navigation.push("Hair")}
                style={styles.button}
             />
            <Pressable 
                title="Back to Home" 
                onPress={() => navigation.goback({HomeScreen})}
            />
        </View>
    );
}

// STYLES FOR THE AVATARSCREEN.JS COMPONENT
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
        width: 200, 
        height: 200, 
        margin: 10, 
    },
    avatarContainer: {
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        justifyContent: 'center',
    },
    avatarRows: {
        margin: 10,
    },
    avatarContainer: { 
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop: 100,
        marginBottom: 16,
    }
  });