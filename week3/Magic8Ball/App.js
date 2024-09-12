import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Modal, TextInput, Image, } from 'react-native';

// MAGIC 8 BALL REPSONSES
const responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
];

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [userGuess, setUserGuess] = useState("");
  const [response, setResponse] = useState("");

  function startMagicBallHandler (){
    const randomIndex = Math.floor(Math.random() * responses.length);
    setResponse(responses[randomIndex]);
    setModalIsVisible(true);
  }
  
  function endMagicBallHandler (){
    setModalIsVisible(false);
  }
  
  return (
    <>
      <StatusBar style="auto"/>
      <SafeAreaView style={styles.root}>

{/* ------------- HEADING OF THE MAGIC 8 BALL APP ------------- */}
        <View style={styles.titleContainer}> 
          <Text style={styles.mTitle}> Magic 8 Ball </Text>
        </View>
    
{/* ------------- IMAGE OF 8 BALL ------------- */}
        <View style={styles.containerImage}>
          <Image style={styles.image}
            source={require("./assets/images/MagicBall_Image.jpg")}
          />
        </View>
{/* ------------- USER INPUT ------------- */}

        <TextInput
          style={styles.textInput}
          placeholder="What Will Your Future Hold Today?"
          value={userGuess}
          onChangeText={setUserGuess}
        />                
{/*-------------  MAGIC 8 BALL BUTTON ------------- */}
        <View style={styles.button} > 
          <Button title="Shake Magic 8 Ball" color="blue" onPress={startMagicBallHandler}/>
        </View>

{/* -------------- MODAL SCREEN ------------- */}
        <Modal visible={modalIsVisible} animationType="slide">
          <SafeAreaView style={styles.modalRoot}>
            <Text style={styles.modalResponse}>{response}</Text>

            <View style={styles.buttonContainer}>
              <View style={styles.button} > 
                <Button title="Shake Magic 8 Ball Again" onPress={startMagicBallHandler} />
              </View>
              <View style={styles.button}>
                <Button title="Cancel" color="red" onPress={endMagicBallHandler} />
              </View>
            </View>
          </SafeAreaView>
        </Modal>
      </SafeAreaView>
    </>
    
  );
}

// STYLE SHEET FOR:
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
// TITLE SPACE 
  titleContainer: {
    backgroundColor: "gray",
    width: "100%",
    justifyContent: "center",
    marginBottom: 20,
    paddingVertical: 10,
    borderWidth: 3,
    borderRadius: 10,
    alignItems: "center",
  },
//  "MAGIC 8 BALL" MAIN SCREEN CONTENT
  mTitle: {
    textAlign: "center",
    fontSize: 60,
    justifyContent: "center",
    fontWeight: "bold",
       
  },
  containerImage: {
    flexDirection: "row", //(defualt flex direction is (column) up/down)
    justifyContent: "center",
    alignItems:"center",
    width: "80%",

  },
  image: {
    height: 350,
    width: 350,
    borderRadius: 30,

  },
  textInput: {
    width: "100%",
    backgroundColor: "white",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    borderWidth:1,
    borderColor: "gray",
  },

  button: {
    margin:10,
    color: "purple",
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
  },

// STYLING FOR THE MODAL SCREEN 
  modalRoot: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  modalResponse: {
    fontSize: 36,
    color: "light-blue",
    fontWeight: "bold",
    marginBottom: 20,
},

});
