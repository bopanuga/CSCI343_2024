import { StyleSheet, View, Text } from "react-native";
import Title from "../components/Title";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../constants/colors";
import { Button } from 'react-native';
import NavButton from "../components/NavButton";


function OrderReviewScreen(props){
    //SET SAFE AREA SCREEN BOUNDARIES
    const insets =useSafeAreaInsets();

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
                <Title> Order Summary </Title>
            </View>

            <View style={styles.subTitleContainer}>
                <Text style={styles.subTitle}> Your order has been placed with you order details below</Text>
            </View>
            <View style={styles.repairContainer}>
                <Text style={styles.repair}> Repair Time:</Text>
                <Text style={styles.subRepair}>{props.size}</Text>
                <Text style={styles.repair}> Services:</Text>
                {props.services.map((item) => {
                    if (item.value) {
                        return (
                            <Text key={item.id} style={styles.subRepair}>   
                                {item.name}
                            </Text>
                        );
                    }
                })}
            </View>
            <View style={styles.subTitleContainer}>
                <Text style={styles.subTitle}>Subtotal: ${props.price.toFixed(2)}</Text>
                <Text style={styles.subTitle}>Sales Tax: ${(props.price * 0.06).toFixed(2)}</Text>
                <Text style={styles.subTitle} >Total: ${(props.price + props.price *0.06).toFixed(2)}</Text>
            </View>
            <View style={styles.buttonContainter}>
                <NavButton onPress={props.onNext}> Back to Home </NavButton>
            </View>
        </View>
    );
}

export default OrderReviewScreen;

const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
    },
    titleContainer: {
        marginBottom: 10,
        marginHorizontal: 10,
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: Colors.primary500
    },
    subTitleContainer:{
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
    },
    subTitle: {
        fontSize:22,
        fontWeight: "bold",
        textAlign: "center",
        color: Colors.primary500
    },
    repairContainer: {
        flex: 3,
    },
    repair: {
        fontSize: 20,
        color: Colors.primary500
    },
    subRepair: {
        textAlign: "center",
        fontSize: 17,
        fontWeight: "bold"
    },
    buttonContainter:{
        alignItems: "center",
        borderWidth: 3,
        borderColor: Colors.primary300
    }
  });