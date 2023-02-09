import { View, Text, StyleSheet } from "react-native";

function Home(_props: any){

    if(_props.authState === 'signedIn'){
        return (
            <View>
                <Text>This is our home screen!</Text>
            </View>
        );
    }else{
        return (<></>);
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Home;