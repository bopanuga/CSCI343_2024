// PAGE FOR US NEWS SCREEN
import { LISTINGS } from "../data/dummy_data";
import List from '../components/List';

function UsNewsScreen() {
    const type = "US";
    const displayedListings = LISTINGS.filter((listingItem) => {
        return listingItem.type === type;
    });

    return <List items={displayedListings} />;
}

export default UsNewsScreen;
