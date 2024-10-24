import { FlatList, Text, View } from 'react-native';
import { COUNTRIES } from '../data/dummy-data'; 
import CountryGridTile from '../components/CountryGridTile';


// HOMESCREEN COMPONENT - DISPLAYS A LIST OF COUNTRIES
function Homescreen(props){
    // RENDERS ITEM IN FLATLIST
    function renderCountryItem(itemData){
        
        function pressHandler(){
            props.navigation.navigate("DestinationsOverviewScreen", {
                countryId: itemData.item.id, 
            });

        }

        // RETURNS AND DISPLAYS THE COUNTRIES NAME 
        return (
            <CountryGridTile
                name={itemData.item.name}
                color={itemData.item.color}
                onPress={pressHandler}
            />
        );
    }
    // RENDERS THE MAIN VIEW OF THE HOMESCREEN
    return (
        <View>
            <FlatList
            data={COUNTRIES}
            keyExtractor={(item) => {
                return item.id
            }}
            renderItem={renderCountryItem}
            numColumns={2}
            />
         </View>
    );
}
// EXPORT HOMESCREEN COMPONENT FOR OTHER SECTION OF THE APP
export default Homescreen;