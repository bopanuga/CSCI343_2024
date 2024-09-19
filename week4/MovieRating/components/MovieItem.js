// CAPITALIZE THE COMPONENT
// THIS PAGE SERVES AS....(13:10)

import { Text, View, Image, StyleSheet} from 'react-native';

// COMPONENT TO DISPLAY MOVIE ITEM
function MovieItem(props) {
    return (
    // "movie blocks"
        <View style={styles.itemContainer}>
            <View style={styles.itemTitleContainer}>
                <Text style={styles.itemTitle}>{props.name} </Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={(props.image)}/> 
            </View>
            <View style={styles.ratingContainer}>
                <Text style={styles.rating}>{props.rating} / 5</Text>
            </View>
        </View>   
    );
}
// COMPONENT TO IMPORT
export default MovieItem;

// STYLE SHEET FOR THE CUSTOM COMPONENT OF THE APP. 
const styles = StyleSheet.create({
    itemContainer: {
        marginBottom: 20
    },

    itemTitleContainer: {
        backgroundColor: "#ebdce4",
        borderColor: "#ffd2d4",
        borderWidth: 5,
        borderRadius: 10
    },

    itemTitle: {
        fontSize: 30,
        textAlign: "center",
        fontStyle: "italic",
    },
    imageContainer: {
        alignItems: "center",
        borderWidth: 5,
        borderRadius: 10
    },
    image: {
        width: "100%",
        height: 500,
        resizeMode: "cover"
    },
    ratingContainer: {
        backgroundColor: "#ebdce4",
        borderColor: "#ffd2d4",
        borderWidth: 5,
        borderRadius: 10
    },

    rating: {
        fontSize: 30,
        textAlign: "center"
    },

}); 