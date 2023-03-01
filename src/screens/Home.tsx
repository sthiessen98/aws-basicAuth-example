import { View, Text, StyleSheet, Button, Dimensions, TouchableOpacity } from "react-native";
import { useContext, useState } from "react";
import { SessionContext } from "../components/Session";

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

function Home(_props: any){

  const { logout } = useContext(SessionContext);

    const [num, setNum] = useState<number>(0);

        return (
            <View style={styles.container}>
                <Text style={ styles.text}>You have successfully Signed In!</Text>
                <TouchableOpacity style={styles.button} onPress={()=> logout()}>
                <Text style={styles.buttonText}>Log Out</Text>
              </TouchableOpacity>
            </View>
        );
}


const styles = StyleSheet.create({
  container: {
      height: screenHeight-30,
      justifyContent: 'center',
      marginLeft: 5,
      marginRight: 5,
  },
  inputContainer: {
      marginBottom: 10,
  },
  secondaryButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around'
  },
  text: {
      color: 'seagreen',
      fontSize: 22,
      justifyContent: 'flex-start',
      fontWeight: 'bold',
      marginBottom: 5,
  },
  label: {
      color: 'black',
      fontSize: 14,
  },
  textInput: {
      height: 40,
      width: screenWidth - 20,
      borderColor: 'black',
      borderWidth: 1,
      color: 'gray',
      fontSize: 14,
      marginBottom: 3,
  },
  button: {
      backgroundColor: 'seagreen',
      height: 40,
      borderRadius: 5,
      justifyContent: 'center',
  },
  secondaryButton: {
      height: 40,
      justifyContent: 'center',
  },
  buttonText: {
      color: 'white',
      fontSize: 18,
      textTransform: 'uppercase',
      textAlign: 'center',
  },
  secondaryButtonText: {
      color: 'black',
      fontSize: 12,
      textTransform: 'uppercase',
      textAlign: 'center',
      textDecorationLine: 'underline',
  },
  errorText: {
      color: 'red',
      fontSize: 12,
  }
});

export default Home;