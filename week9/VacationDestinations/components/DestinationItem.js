import { useState } from "react";
import { View, Pressable, Image, Text, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { ImageViewModal } from "../modal/ImageViewModal"

function DestinationItem(props) {
    const [modalIsVisible, setModalIsVisible] = useState(false);

    function viewImageHandler() {
        setModalIsVisible(true);
    }

    function closeImageHandler() {
        setModalIsVisible(false);
    }

    return (
        <View
            style={[
                styles.itemContainer,
                {backgroundColor: props.listIndex % 2 == 0 ? "#ccc": "#fff"},
            ]}        
        >
            <Pressable
             style={({ pressed }) => [
                styles.button,
                pressed ? styles.buttonPressed : null,
             ]}
             android_ripple={{color: Colors.primary300}}
             onPress={viewImageHandler}
            > 
                <View style={styles.rowContainer}>
                    <Image 
                        source={{ uri: props.imageUrl }} 
                        style={styles.image}
                        // style={{ width: 100, height: 100 }} 
                    />
                    <View style={styles.infoContainer}>
                        <Text style={styles.name}>{props.name}</Text> 
                        <View style={styles.innerRowContainer}>
                            <Text style={styles.sites}>Sites: {props.numSites}</Text>
                            <Text style={styles.year}>{props.foundedYear}</Text>
                        </View>
                        <Text style={styles.rating}>Rating: {props.rating} / 5</Text>
                    </View>
                </View>
            </Pressable>

            <ImageViewModal
                IsVisible={modalIsVisible}
                imageUrl={props.imageUrl}
                onClose={closeImageHandler}
            />
        </View>
    );
}

export default DestinationItem;

const styles= StyleSheet.create({
    itemContainer: {
        backgroundColor: "#CCC",
        paddingHorizontal: 5,
        paddingTop:3,
        marginBottom:3,
        borderRadius: 7,
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    rowContainer: {
        height: 100,
        flexDirection: "row",
        alignitems: "center",
        marginBottom: 10,
    },
    image: {
        width: "25%",
        height: "100%",
        resizeMode: "contain",
        borderRadius: 15,
    },
    infoContainer: {
        width: "75%",
        paddingleft: 20,
    },
    name: {
        fontWeight: "bold",
        textAlign: "left",
        fontSize: 20,
    },
    sites: {
        width: "85%",
        fontSize: 14,
    },
    year: {
        fontSize: 14,
        fontWeight: "bold",
    },
    innerRowContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
})