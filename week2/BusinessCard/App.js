import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Linking } from 'react-native';

export default function App() {
  
  return (
    <> 
      <StatusBar style="auto"/>
      <SafeAreaView style={styles.root}>

        {/* PLACE IMAGE HERE */}
        <View style={styles.containerImage}>
          <Image style={styles.Image}
            source={require("./assets/images/myimage.jpeg")}
          />
        </View>

        {/* PLACE TEXT INFORMATION HERE */}
        <View style={styles.containerText}>
          <Text style={styles.Name}> Name: Blessing Opanuga </Text>
          <Text style={styles.Text}> E-Mail: bopanuga@coastal.edu </Text>

        {/* PLACE TEXT LINK HERE (CLICK-ABLE PHONE NUMBER LINK) */}
          <Text
           style={styles.Text}
           onPress={() => {Linking.openURL('tel:2404862419')}}
           > Number: 240-486-2419 </Text>

        {/* PLACE TEXT LINK HERE (CLICK-ABLE GITHUB LINK) */}
          <Text
           style={styles.Text}
           onPress={() => {Linking.openURL("https://github.com/bopanuga/CSCI343_2024.git")}}
          > Github Page: https://github.com/bopanuga/CSCI343_2024.git </Text>
        </View>
      </SafeAreaView>
    </>
  );
}

// STYLE SHEET FOR:
const styles = StyleSheet.create({
// THE ROOT 
  root: {
    flex: 1, // ("height: 100," would also work for flex) ; direction is always verticle
    alignItems: "center", // left to right centering 
    justifyContent: "center",
    backgroundColor: "#268f8e"
  },

// SPACE AROUND MY INFORMATION 
  containerText: {
     flex: 2,
     width: "100%",
     alignItems: "center"
   },
    // NAME ON PAGE STYLING
  Name: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
    marginBottom: 40
    },
   // ALL OTHER TEXT ON PAGE STYLING
  Text: {
    fontSize: 20,
    fontWeight: "bold",
    fontcolor: "black",
    fontStyle: "Bebas Nue",
    marginBottom: 40,
    marginTop: 10,
    textAlign: "center"
    },

// SPACE AROUND THE IMAGE 
  containerImage: {
    flex: 2, 
    width:"100%",
    marginTop: 100
},
// IMAGE STYLING 
  Image: {
    height: 300, 
    width:"100%",
    resizeMode: "cover",
    backgroundColor: "white",
    borderWidth: 10,
    borderColor: "#cec8c1"
  },
});
