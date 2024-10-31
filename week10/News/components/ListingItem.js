import { Image, Text, View, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import PropTypes from 'prop-types';

function ListingItem(props) {
    const navigation = useNavigation();

    function selectedListingHandler() {
        navigation.navigate("NewsDetail", { listingId: props.id });
    }

    return (
        <View
            style={[
                styles.itemContainer,
                {
                    backgroundColor: props.listIndex % 2 === 0 ? "#ccc" : "#fff",
                },
            ]}
        >
            <Pressable onPress={selectedListingHandler}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: props.imageUrl }} />
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.price}>
                        {props.headline.toLocaleString()}
                    </Text>

                    {/* <Text style={styles.space}>
                        {props.bedrooms} Bed | {props.bathrooms} Bath | {props.squareFeet} SqFt
                    </Text>

                    <Text style={styles.address}>
                        {props.address}, {props.city} {props.state} {props.zipCode}
                    </Text> */}
                </View>
            </Pressable>
        </View>
    );
}

ListingItem.propTypes = {
    onSelectListing: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    // price: PropTypes.number.isRequired,
    // bedrooms: PropTypes.number.isRequired,
    // bathrooms: PropTypes.number.isRequired,
    // squareFeet: PropTypes.number.isRequired,
    // address: PropTypes.string.isRequired,
    // city: PropTypes.string.isRequired,
    // state: PropTypes.string.isRequired,
    // zipCode: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    agency: PropTypes.string.isRequired,
    listIndex: PropTypes.number.isRequired,
};

export default ListingItem;

const styles = StyleSheet.create({
    itemContainer: {
        marginVertical: 10,
        borderRadius: 8,
        overflow: 'hidden',
    },
    imageContainer: {
        width: '100%',
        height: 200,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    infoContainer: {
        padding: 10,
        alignItems: 'center',
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    space: {
        fontSize: 16,
        color: 'gray',
    },
    address: {
        fontSize: 14,
        color: 'gray',
    },
});
