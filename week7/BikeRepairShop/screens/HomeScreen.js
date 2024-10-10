import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import Colors from "../constants/colors";
import BouncyCheckBox from "react-native-bouncy-checkbox";
import { RadioGroup } from "react-native-radio-buttons-group";
import { Switch } from 'react-native';
import NavButton from "../components/NavButton";

function HomeScreen(props) {
    // SET THE SAFE AREA BOUNDARIES
    const insets = useSafeAreaInsets();

    return (
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
            <View style={styles.titleContainer}>
                <Title>The Bike Clinic</Title>
            </View>
            {/* CODE FOR THE REPAIR TIME (RADIO BUTTONS) */}
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.radioContainer}>
                    <Text style={styles.radioHeader}>Repair Times:</Text>
                    <RadioGroup
                        radioButtons={props.repairTimeRadioButtons} // CHECK HERE FOR POSSIBLE ERROR?
                        onPress={props.onsetRepairTimeId}
                        selectedId={props.repairTimeId}
                        layout="row"
                        containerStyle={styles.radioGroup}
                        labelStyle={styles.radioGroupLabels}
                    />
                </View>
                {/* CODE FOR THE SERVICE OPTIONS (CHECKBOX SECTION) */}
                <View style={styles.rowContainer}>
                    <View style={styles.checkBoxContainer}>
                        <Text style={styles.checkBoxHeader}>Service Options:</Text>
                        <View style={styles.checkBoxSubContainer}>
                            {props.services.map((item) => {
                                return (
                                    <BouncyCheckBox
                                        key={item.id}
                                        text={item.name}
                                        onPress={props.onsetServices.bind(this, item.id)}  
                                        textStyle={{
                                            textDecoration: "none",
                                            color: Colors.primary500,
                                        }}
                                        innerIconStyle={{
                                            borderRadius: 0,
                                            borderColor: Colors.primary500,
                                        }}
                                        iconStyle={{
                                            borderRadius: 0,
                                        }}
                                        fillColor={Colors.primary500}
                                        style={{
                                            padding: 2,
                                        }}                                                           
                                    />
                                );   
                            })}
                        </View>
                    </View>
                </View>
                {/* CODE FOR THE NEWSLETTER OPTIONS (SLIDER SECTION) */}
                <View style={styles.rootContainer}>
                    <View style={styles.addOnsContainer}>
                        <View style={styles.addOnsSubContainer}>
                            <Text style={styles.addOnsLabel}> Sign-up for our Newsletter?</Text>
                            <Switch
                                onValueChange={props.onsetNewsletter}
                                value={props.newsletter}
                                thumbColor={
                                    props.Newsletter ? Colors.primary500 : Colors.primary800
                                }
                                trackColor={{false: Colors.primary500, true: Colors.primary500}}
                            />
                        </View>
                        <View style={styles.addOnsSubContainer}>
                            <Text style={styles.addOnsLabel}>Sign-up for our Rental Membership?</Text>
                            <Switch
                                onValueChange={props.onsetRentalMembership}
                                value={props.rentalMembership}
                                thumbColor={
                                    props.RentalMembership ? Colors.primary500 : Colors.primary800
                                }
                                trackColor={{false: Colors.primary500, true: Colors.primary500}}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.buttonContainter}>
                    <NavButton onPress={props.onNext}>Submit Order</NavButton>
                </View>
            </ScrollView>
        </View>
    );
}



export default HomeScreen;

const styles = StyleSheet.create ({
    rootContainer: {
        flex: 1,
    },
    titleContainer: {
        marginBottom: 10,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: Colors.primary500,
        paddingHorizontal: 30,
        paddingVertical: 5,

    },
    scrollContainer: {
        flex: 1,
    },
    radioContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    radioHeader: {
        fontSize: 30,
        color: Colors.primary500
    },
    radioGroup: {
        paddingBottom: 20,
    },
    radioGroupLabels: {
        fontSize: 15,
        color: Colors.primary500
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingBottom: 20
    },
    checkBoxContainer:{
    },
    checkBoxHeader: {
        fontSize: 20,
        color: Colors.primary500
    },
    checkBoxSubContainer: {
        padding: 2
    },
    addOnsContainer:{
        justifyContent: "space-between",
    },
    addOnsSubContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    addOnsLabel:{
        color: Colors.primary500,
        fontSize: 20,
    },
    buttonContainter:{
        alignItems: "center",
        borderWidth: 3,
        borderColor: Colors.primary300
    }
});