import { View, Text, StyleSheet, Image } from 'react-native';
import { useState, useLayoutEffect, useContext } from 'react';
import { LISTINGS } from '../data/dummy_data';
import BookmarkButton from '../components/BookmarkButton';
import Colors from "../constants/colors";
import { BookmarksContext} from '../store/context/bookmarks.context';

// NEWS DETAIL COMPONENT DISPLAYS DIFFRENT NEWS ITEMS TO BE BOOKMARKED
function NewsDetailScreen(props) {
    const bookmarkedNewsCtx = useContext(BookmarksContext);
    const listingId = props.route.params.listingId;
    const selectedListing = LISTINGS.find((listing) => listing.id === listingId);

    // CHECK TO SEE IF LISTING IS ALREADY BOOKMARKED WITH CORRESPONDING ID
    const listingIsBookmarked = bookmarkedNewsCtx.ids.includes(listingId);

    // IF ARTICLE IS SELECTED => BOOKMARK BUTTON HAS BEEN PRESSED
    function changeBookmarkStatusHandler(){
        if (listingIsBookmarked){
            bookmarkedNewsCtx.removeFavorite(listingId)
        } else {
        bookmarkedNewsCtx.removeFavorite(listingId)
        }
    }
    // UPDATED AND FIXED OPTIONS FOR THE NAVIGATION HEADER
    useLayoutEffect(() => {
        props.navigation.setOptions({
            title: "",
            headerRight: () => {
                return (
                    <BookmarkButton
                        pressed={listingIsBookmarked}
                        onPress={changeBookmarkStatusHandler}
                    />
                );
            }, 
        });
    }, [props.navigation, changeBookmarkStatusHandler]);

    // RENDERS DETAILS OF THE SELECTED NEWS ITEM
    return (
        <View style={styles.rootContainer}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: selectedListing.imageUrl }}
                />
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.price}>
                    {selectedListing.headline.toLocaleString()}
                </Text>

                <Text style={styles.address}>
                    Author: {selectedListing.author.toLocaleString()}
                </Text>

                <Text style={styles.address}>
                    Agency: {selectedListing.agency.toLocaleString()}
                </Text>

                <Text style={styles.address}>
                    Date: {selectedListing.date}
                </Text>

                <Text style={styles.address}>
                    {selectedListing.description}
                </Text>
            </View>
        </View>
    );
}
export default NewsDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    imageContainer: {
        marginVertical: 10,
        height: 300,
    },
    image: {
        height: "100%",
        resizeMode: "cover",
        borderRadius: 9,
    },
    infoContainer: {
        borderRadius: 7,
        backgroundColor: Colors.primary500o5,
        flex: 1,
        alignItems: "center",
    },
    price: {
        color: Colors.primary300,
        fontSize: 25,
        fontFamily: "playfair",
        paddingBottom: 5,
    },

    imageContainer: {
        width: '100%',
        height: 300,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    space: {
        color: Colors.primary300,
        textAlign: "center",
        width: "100%",
        fontSize: 15,
        fontFamily: "playfair",
        paddingBottom: 5,
    },
    address: {
        fontSize: 14,
        color: Colors.primary300,
        textAlign: "center",
        width: "100%",
        fontSize: 15,
        fontFamily: "playfair",
        marginBottom: 30,
    },
    description: {
        color: Colors.primary300,
        width: "90%",
        textAlign: "justify",
        fontSize: 15,
        fontFamily: "playfair"
    },
    year: {
        color: Colors.primary300,
        fontSize: 25,
        fontFamily: "playfair",
        marginBottom: 30,
    },
});


