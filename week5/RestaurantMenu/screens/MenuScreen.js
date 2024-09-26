import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, StyleSheet, Title, FlatList } from 'react-native';
import NavButton from '../components/NavButton';
import { useState } from 'react-native';
import EventItem from '../components/MenuItems';

//STARTING COMPONENT
function MenuScreen(props) {
    // SET SAFE AREA SCREEN BOUNDARIES
    // when the screen renders, it looks at the size of your screen and sees how far it can go.
    const insets = useSafeAreaInsets();

    const [menuItems, setMenuItems] = useState([
        {
            name: "Hibachi",
            image: require("./assets/images/hibachi.jpeg"),
            price: "$12.75",
          },
          {
            name: "Kung Pao Chicken",
            image: require("./assets/images/kungpaochicken.jpeg"),
            price: "$7.29",
          },
          {
            name: "Sping Rolls",
            image: require("./assets/images/springrolls.jpeg"),
            price: "$5.25",
          },
          {
            name: "Sushi",
            image: require("./assets/images/sushi.jpeg"),
            price: "$15.88",
          },
          {
            name: "Miso Bok-Choy Soup",
            image: require("./assets/images/misobokchoysoup.jpeg"),
            price: "$10.25",
          },
    ]);
       
       
    return (
        <View style={[
            styles.rootContainer,
            {
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
            }
        ]}>
            <View style={styles.titleContainer}>
                <Title>Menu</Title>
            </View>

            <View style={styles.listContainer}>
                <FlatList
                data = {menuItems}

                keyExtractor={(item) => item.id}

                alwaysBounceVertical = {false}
                showsVerticalScrollIndicator = {false}
                renderItem={(itemData) => {
                    return (
                        <EventItem
                            name= {itemData.item.name}
                            image= {itemData.item.image}
                            price= {itemData.item.price}
                        />
                    );
                }}
                
                />
            </View>

            <View style={styles.buttonContainer}>
                <NavButton onPress={props.onNext}>Back to Home</NavButton> 
            </View>

        </View>
    );
}

export default MenuScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        width: 400,
        alignItems: "center",
    },
    titleContainer: {
        flex: 1,
        justifyContent: "center",

    },
    listContainer: {
        flex: 7,
        width: "25%"
    },
    buttonContainer: {
        flex: 1,
    }
});
