import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, StyleSheet, Text, Image, Linking } from 'react-native';
import Title from "../components/Title";
import NavButton from '../components/NavButton';
import Colors from '../constants/colors';

//STARTING COMPONENT
function HomeScreen(props) {
    // SET SAFE AREA SCREEN BOUNDARIES
    // when the screen renders, it looks at the size of your screen and sees how far it can go.
    const insets = useSafeAreaInsets(); 

    return (
        <View 
            style={[
                styles.rootContainer,
                {
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom,
                    paddingLeft: insets.left,
                    paddingRight: insets.right,
                },
            ]}
        >
            <View style={styles.titleContainer}>
                <Title>Ichiban</Title>
            </View>

            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image} 
                    source={require("../assets/images/Ichiban.jpeg")}
                />
            </View>

            <View style={styles.infoContainer}>
                <Text
                style={styles.infoText}
                onPress={() => Linking.openURL("tel:8432723000")}
                >843-365-8889
                </Text>

                <Text
                style={styles.infoText}
                onPress={() => Linking.openURL("https://maps.app.goo.gl/9Cgt11ePxJEeSmU76")}
                >2494 Church St{"\n"}Conway{"\n"}SC 29526
                </Text>

                <Text
                style={styles.infoText}
                onPress={() => Linking.openURL("http://www.ichiban8889.com/")}
                >www.ichiban8889.com
                </Text>

            </View>

            <View style={styles.buttonContainer}>
                <NavButton onPress={props.onNext}>View Menu</NavButton> 
            </View>
        </View>
    
    );
}

export default HomeScreen;

const styles = StyleSheet.create ({
    rootContainer: {
        flex: 1,
        alignItems: "center",
    },
    titleContainer: {
        flex: 1,
        justifyContent: "center",
    },
    imageContainer: {
        flex: 4,
    },
    image: {
        resizeMode: "cover",
        height: "100%",
        width: 300
    },
    infoContainer: {
        flex: 3,
        justifyContent: "center"
    },
    infoText: {
        fontSize: 30,
        textAlign: "center",
        padding: 7,
        color: Colors.primary500,
        fontFamily: "squealer"
    },
    buttonContainer: {
        flex: 1,

    }

        
});
