// IMPORTS FOR HOMESCREEN.JS
import { 
    View, 
    StyleSheet, 
    ImageBackground, 
    ScrollView, 
    Pressable, 
    Platform, 
    Text, 
    useWindowDimensions,
    Modal,
    Button, 
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import Colors from "../constants/colors";
import { useState } from "react";
import { DateTimePicker } from "@react-native-community/datetimepicker";
import WheelPicker from "react-native-wheely";
import NavButton from "../components/NavButton";

// MAIN COMPONENT FOR THE HOMESCREEN
function HomeScreen(){
    // SAFE AREA INSETS FOR PADDINNG ON DIFF DEVICES
    const insets = useSafeAreaInsets ();

    // SETTING THE DATE TO THE USERS CURRENT DATE
    const [checkIn, setCheckIn] = useState(new Date());

    // CONTROLS VISIBILITY OF THE CHECK IN DATE PICKER
    const [showCheckIn, setShowCheckIn] = useState(false);

    // DISPLAYS THE CHECK-IN DATE PICKER
    function showCheckInPicker(){
        setShowCheckIn(true);
    }

    // HIDES THE CHECK-IN DATE PICKER
    function hideCheckInPicker(){
        setShowCheckIn(false);
    }

    // HANDLES CHANGE IN THE CHECK IN DATE -------------------------------> ??????
    function onChangeCheckIn(event, selectedDate) {
        const currentDate = selectedDate;
        if (Platform.OS === "android"){
            hideCheckInPicker(true);
        }
        setCheckIn(currentDate);
    }

    // CHECK OUT FUNCTIONS
    const [checkOut, setCheckOut] = useState(new Date());
    const [showCheckOut, setShowCheckOut] = useState(false);

    function showCheckOutPicker(){
        setShowCheckOut(true);
    }

    function hideCheckOutPicker(){
        setShowCheckOut(false);
    }
    function onChangeCheckOut(event, selectedDate) {
        const currentDate = selectedDate;
        if (Platform.OS === "android"){
            hideCheckOutPicker(true);
        }
        setCheckOut(currentDate);
    }
    
    // LIST OF GUEST COUNT FOR PICKER (IN THE MODAL)
    const  guestCounts = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const [numGuests, setNumGuests] = useState(0);
    const [showNumGuests, setShowNumGuests] = useState(false);

    function showNumGuestsPicker (){
        setShowNumGuests(true);
    }
    function hideNumGuestsPicker(){
        setShowNumGuests(false);
    }

    function onChangeNumGuests(index){
        setNumGuests(index);
    }

    // LIST OF GUEST COUNT FOR CAMPSITES (IN THE MODAL) 
    const  bedCounts = [0, 1, 2, 3, 4];
    const [numBeds, setNumBeds] = useState(0);
    const [showNumBeds, setShowNumBeds] = useState(false);

    function showNumBedsPicker (){
        setShowNumBeds(true);
    }

    function hideNumBedsPicker(){
        setShowNumBeds(false);
    }

    function onChangeNumBeds(index){
        setNumBeds(index);
    }
    // PLACEHOLDER FOR RESULTS TO SHOW AFTER RESEVATION
    const [results, setResults] = useState("");

    function onReserveHandler(){
        let res = `Check In\t\t${checkIn.toDateString()}\n` // backticks used for embeded expressions withn the string
        res = res + `Check Out\t\t${checkOut.toDateString()}\n`
        res = res + `Number of Guests\t\t${guestCounts[numGuests]}\n`
        res = res + `Number of Campsites\t\t${bedCounts[numBeds]}\n`
        setResults(res);
    }

    // RENDERS CURRENT WINDOW DIMENSIONS
    const {width, height} = useWindowDimensions();
    
    // DYNAMIC FONT SIZE BASED ON USERS WINDOW SCREEN SIZE
    const dateLabelFlex = {
        fontSize: width * 0.05

    }
    const dateTextFlex = {
        fontSize: width * 0.05
        
    }


    // MAIN RENDER FUNCTION
    return (
        <ImageBackground
            source={require("../assets/images/camping.jpg")}
            resizeMode="cover"
            style={styles.rootContainer}
            imageStyle={styles.backgroundImage}
        >
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
            
                <ScrollView style={styles.scrollContainer}>
                    {/* TITLE OF CAMPGROUND APPLICATION */}
                     <View style={styles.titleContainer}>
                         <Title> Campfire Cove </Title>
                    </View>

                    {/* CHECK IN & OUT BUTTON COMPONENTS OF CAMPGROUND APPLICATION */}
                    <View style={styles.rowContainer}>
                        <View style={styles.dateContainer}>
                            <Text style={[styles.dateLabel, dateLabelFlex]}>Check In:</Text>
                            <Pressable onPress={showCheckInPicker}>
                                <Text style={[styles.dateText, dateTextFlex]}>{checkIn.toDateString()}</Text>
                            </Pressable>
                        </View>
                        <View style={styles.dateContainer}>
                            <Text style={[styles.dateLabel, dateLabelFlex]}>Check Out:</Text>
                            <Pressable onPress={showCheckOutPicker}>
                                <Text style={[styles.dateText, dateTextFlex]}>{checkOut.toDateString()}</Text>
                            </Pressable>
                        </View>
                    </View>
                    
                    {/* HOLD THE CHECK IN MODALS FOR DATE SELECTION */}
                    <View>
                       {showCheckIn && Platform.OS === "android" && (
                            <DateTimePicker
                                testID="dateTimePickerCheckInAndroid"
                                value={checkIn}
                                mode={"date"}
                                display="spinner"
                                onChange={onChangeCheckIn}
                            />
                       )}
                       {showCheckIn && Platform.OS === "ios" && (
                            <Modal
                                animationType="slide"
                                transparent={true}
                                supportedOrientations={["portrait", "landscape"]}
                            >
                            <View style={styles.centeredModalView}>
                                <View style={styles.modalView}>
                                    <DateTimePicker
                                    testID="dateTimePickerCheckInAndroid"
                                    value={checkIn}
                                    mode={"date"}
                                    display="spinner"
                                    onChange={onChangeCheckIn}
                                    />
                                    <Button title="Confirm" onPress={hideCheckInPicker} />

                                </View>
                            </View>
                        </Modal>
                       )}

                        {/* HOLDS THE CHECK OUT MODALS FOR DATE SELECTION */}                
                        {showCheckOut && Platform.OS === "android" && (
                            <DateTimePicker
                                testID="dateTimePickerCheckOutAndroid"
                                value={checkOut}
                                mode={"date"}
                                display="spinner"
                                onChange={onChangeCheckOut}

                            />
                       )}
                       {showCheckOut && Platform.OS === "ios" && (
                            <Modal
                                animationType="slide"
                                transparent={true}
                                supportedOrientations={["portrait", "landscape"]}
                            >
                            <View style={styles.centeredModalView}>
                                <View style={styles.modalView}>
                                    <DateTimePicker
                                    testID="dateTimePickerCheckOutAndroid"
                                    value={checkOut}
                                    mode={"date"}
                                    display="spinner"
                                    onChange={onChangeCheckOut}
                                    />
                                    <Button title="Confirm" onPress={hideCheckOutPicker} />
                                </View>
                            </View>
                        </Modal>
                       )}
                    </View>
                    
                    {/* A NUMBER OF GUEST WHEEL SELECTOR AND TEXT DISPLAY */}
                    <View style={styles.rowContainer}>
                        <Text style={[styles.dateLabel, dateLabelFlex]}>Number of Guests:</Text>
                        <Pressable onPress={showNumGuestsPicker}>
                            <View style={styles.dateContainer}>
                                <Text style={[styles.dateText, dateTextFlex ]}>{guestCounts[numGuests]}</Text>
                            </View>
                        </Pressable>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={showNumGuests}
                            supportedOrientations={["portrait", "landscape"]}
                        >
                        {/* WHEEL PICKER COMPONENT FOR THE NUMBER OF GUESTS */}
                            <View style={styles.centeredModalView}>
                                <View style={styles.modalView}> 
                                    <Text style={[styles.dateText, dateTextFlex ]}>Enter Number of Guests</Text>
                                    <WheelPicker
                                        selectedIndex={numGuests}
                                        options={guestCounts}
                                        onChange={onChangeNumGuests}
                                        containerStyle={{width: 200 }}
                                    />
                                    <Button title="Confirm" onPress={hideNumGuestsPicker}/>
                                </View>
                            </View>
                        </Modal>
                    </View> 

                    {/* TO SELECT THE NUMBER OF CAMPSITES */}
                    <View style={styles.rowContainer}>
                        <Text style={[styles.dateLabel, dateLabelFlex]}>Number of Campsites:</Text>
                        <Pressable onPress={showNumBedsPicker}>
                            <View style={styles.dateContainer}>
                                <Text style={[styles.dateText, dateTextFlex ]}>{bedCounts[numBeds]}</Text>
                            </View>
                        </Pressable>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={showNumBeds}
                            supportedOrientations={["portrait", "landscape"]}
                        >
                        {/* WHEEL PICKER COMPONENT FOR THE CAMPSITE ??? */}
                            <View style={styles.centeredModalView}>
                                <View style={styles.modalView}> 
                                    <Text style={[styles.dateText, dateTextFlex ]}>Enter Number of Campsites</Text>
                                    <WheelPicker
                                        selectedIndex={numBeds}
                                        options={bedCounts}
                                        onChange={onChangeNumBeds}
                                        containerStyle={{width: 200 }}
                                    />
                                    <Button title="Confirm" onPress={hideNumBedsPicker}/>
                                </View>
                            </View>
                        </Modal>
                    </View>
                    {/* NAV BUTTON FOR USER TO RESERVE THEIR PLACE */}
                    <View style={styles.buttonContainter}>
                        <NavButton onPress={onReserveHandler}>Reserve Now</NavButton>
                    </View>
                    
                    {/* RENDERS THE RESULT OF THE USERS CHOICES */}
                    <View style={styles.resultsContainer}>
                        <Text style={[styles.results, dateLabelFlex ]}>{results}</Text>
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    );
}
// FUNCTION EXPORTS THE HOMESCREEN
export default HomeScreen;

// STYLESHEET FOR THE HOMESCREEN
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    backgroundImage: {
        opacity: 0.3,
    },
    titleContainer:{
        padding: 7,
        marginVertical: 20,
        marginHorizontal: 20,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: Colors.primary500,
        backgroundColor: Colors.primary300,
        width: 3000,
        maxWidth: "90%",
    },
    scrollContainer: {
        flex: 1,
        width: 3000,
        maxWidth: "100%",
    },

    dateContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 20,
        marginBottom: 20,
        backgroundColor: Colors.primary300o5,
        padding: 10,
    },
    dateLabel: {
        fontSize: 100,
        color: Colors.primary500,
        fontFamily: "mountain",
        textShadowColor: "black",
        textShadowOffset: {width: 2, height:2},
        textShadowRadius: 2,

    },
    dateText: {
        color: Colors.primary800,
        fontWeight: "bold",   
    },
    centeredModalView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        color: Colors.primary300,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "black",
        shadowOffset: {width: 2, height:2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonContainter:{
        alignItems: "center"
    },
    results:{
        textAlign: "center",
        color: Colors.primary500,
        fontFamily: "mountain",
        textShadowColor: "black",
        textShadowOffset: {width: 2, height:2},
        textShadowRadius: 2,
    }
  });