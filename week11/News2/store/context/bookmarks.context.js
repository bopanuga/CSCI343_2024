import { createContext, useState } from "react";

// HOLDS THE FUNCTION TO ADD OR REMOVE SOMETHING FROM A STATE, CREATES CONTEXT FOR BOOKMARKS 
export const BookmarksContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
});

// CREATING THE CONTEXT PROVIDER & MANAGES THE BOOKMARK STATE
function BookmarksContextProvider({ children }) {
    const [bookmarkIds, setbookmarkIds] = useState([]);

    function addFavorite(id) {
        setBookmarkIds((currentBookmarkIds) => {
        return [...currentBookmarkIds, id];
        });
    }
    // REMOVES A FAVORITE ITEM BY ID
    function removeFavorite(id){
        setBookmarkIds((currentBookmarkIds) => {
            return currentBookmarkIds.filter((bookId) => bookId != id)
        });
    }
    // DEFINES VALUE FOR CONTEXT
    const value = {
        ids: bookmarkIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    };
    // RETURNS THE CONTEXT PROVIDER
    return <BookmarksContext.Provider value={value}>{children}</BookmarksContext.Provider> 
}

// EXPORTING THE BOOKMARKSCONTEXTPROVIDER COMPONENT
export default BookmarksContextProvider;