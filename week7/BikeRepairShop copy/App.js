import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useMemo } from 'react';
//IMPORTING THE COLORS VARIABLE 
import Colors from './constants/colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import OrderReviewScreen from './screens/OrderReviewScreen';

export default function App() {
// STATE VARIABLES FOR THE RADIO BUTTONS
  const [currentScreen, setCurrentScreen] = useState("");
  const [currentPrice, setCurrentPrice] = useState(0);
  
  const repairTimeRadioButtons = useMemo(  // useMemo: when the app is rendered, the information is loaded all at once 
    () => [
      {
        id: "0",
        label: "Standard",
        value: "Standard",
        price: 0,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "1",
        label: "Expedited",
        value: "Expedited",
        price: 50,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "2",
        label: "Next Day",
        value: "Next Day",
        price: 100,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
    ],
    []
  );
  
// STATE VARIABLES FOR THE CHECKBOXES 
  const [repairTimeId, setRepairTimeId] = useState(0);
  const [services, setServices] = useState([
    { id: 0, name: "Basic Tune-Up", value: false, price: 50 },
    { id: 1, name: "Comprehensive Tune-Up", value: false, price: 75 },
    { id: 2, name: "Flat Tire Repair", value: false, price: 20 },
    { id: 3, name: "Brake Servicing", value: false, price: 50 },
    { id: 4, name: "Gear Servicing", value: false, price: 40 },
    { id: 5, name: "Chain Servicing", value: false, price: 15 },
    { id: 6, name: "Frame Repair", value: false, price: 35 },
    { id: 7, name: "Safety Check", value: false, price: 25 },
    { id: 8, name: "Accessory Install", value: false, price: 10 },
  ]);
  
// STATE VARIABLE FOR SLIDERS
  const [newsletter, setNewsletter] = useState(false);
  const [rentalMembership, setRentalMembership] = useState(false);

//FUNCTION FOR SELECTED STATE OF A SERVICE
  function setServicesHandler(id) {
    setServices((prevServices) => 
      prevServices.map((item) =>
        item.id === id ? { ...item, value: !item.value } : item
      )
    );
  }
//FUNCTION TO SET THE STATE VARIABLES
  function setNewsletterHandler(id) {
    setNewsletter((prevrentalMembership) => 
      prevrentalMembership.map((item) =>
        item.id === id ? { ...item, value: !item.value } : item
      )
    );
  }
  function setRentalMembershipHandler(id) {
    setRentalMembership((prevNewsletter) => 
      prevNewsletter.map((item) =>
        item.id === id ? { ...item, value: !item.value } : item
      )
    );
  }

  function homeScreenHandler(){
    setCurrentPrice(0);
    setCurrentScreen("home");
  }
  // PRICE FUNCTION 
  function OrderReviewHandler() {
    let price = 0;
    for (let i = 0; i < services.length; i++){
      if (services[i].value){
        price = price + services[i].price
      }
    }
    setCurrentPrice (price);
    setCurrentScreen("review")
  }

// CONNECTING THE HOME SCREEN
  let screen = (
    <HomeScreen
      // currentScreen={currentScreen}  -- I dont think this is needed
      // currentPrice={currentPrice}    -- I dont think this is needed
      repairTimeId={repairTimeId}
      services={services}
      newsletter={newsletter}
      rentalMembership={rentalMembership}
      repairTimeRadioButtons={repairTimeRadioButtons}

      onsetRepairTimeId={setRepairTimeId}
      onsetServices={setServices}
      onsetNewsletter={setNewsletter}
      onsetRentalMembership={setRentalMembership}

      onsetServicesHandler={setServicesHandler}
      onsetNewsletterHandler={setNewsletterHandler}
      onsetRentalMembershipHandler={setRentalMembershipHandler}
      onNext={OrderReviewHandler}
    />
  );
// NAVAGATING TO THE ORDER REVIEW SCREEN
  if (currentScreen === "review") {
    screen = (
      <OrderReviewScreen 
      size={repairTimeRadioButtons[repairTimeId].value}
      repairTimeId={rentalMembership}
      services={services}
      newsletter={newsletter}
      rentalMembership={rentalMembership}
      price={currentPrice}
      onNext={homeScreenHandler}
      />
    );
  }
  
  return (
    <>
      <StatusBar style="light" />
        <SafeAreaProvider>
          <View style={styles.container}>
            {screen} 
          </View>
        </SafeAreaProvider>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
