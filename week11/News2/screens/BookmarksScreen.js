// PAGE FOR BOOKMARKED NEWS SCREEN
import { View, Text, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { BookmarksContext } from '../store/context/bookmarks.context';
import { LISTINGS } from '../data/dummy_data';
import Colors from '../constants/colors';
import List from '../components/List';

// COMPONENT FOR THE BOOKMARKSSCREEN
function BookmarksScreen (){
    const bookmarkedNewsCtx = useContext(BookmarksContext);
    const bookmarkedNews = LISTINGS.filter((ListingItem)=>{
        return bookmarkedNewsCtx.ids.includes(ListingItem.id);
    });

    // DISPLAYS WHEN THERE ARE NO SAVED ITEMS FROM THE USER
    if (bookmarkedNews.length === 0){
       return ( <View style={styles.rootContainer}> 
            <Text style={styles.text}t> no saved news 🙁 </Text>
         </View>
       );
    } else {
        
    }
   // RETURNS THE LIST OF BOOKMARKED NEWS
   return <List items={bookmarkedNews} />;   
}
// EXPORT THE BOOKMARKSSCREEN COMPONENT
export default BookmarksScreen;

// STYLES FOR THE BOOKMARKSSCREEN COMPONENT
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: Colors.primary300,
        fontFamily: "playfairBoldItalic",
    },
});