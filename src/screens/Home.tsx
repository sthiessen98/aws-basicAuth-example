import { View, Text, StyleSheet } from "react-native";

function Home(_props: any){
        return (
            <View style={styles.container}>
                <Text style={{color:'black'}}>This is our home screen!</Text>
            </View>
        );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Home;