import { View, Text, StyleSheet, Button } from "react-native";
import { useContext, useState } from "react";
import { SessionContext } from "../components/Session";

function Home(_props: any){

  const {getSession, logout} = useContext(SessionContext);

    const [num, setNum] = useState<number>(0);

        return (
            <View style={styles.container}>
                <Text style={{color:'black'}}>This is our home screen!</Text>
                <Button title="Get Session" onPress={()=> getSession()}/>
                <Button title="Logout" onPress={()=> logout()}/>
                <Text style={{color:'black'}}>{num}</Text>
                <Button title="+" onPress={()=> setNum(num+1)}/>
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