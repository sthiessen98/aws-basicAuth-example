import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/Home";
import { useContext } from "react";
import { SessionContext } from "./Session";
import Authentication from "./Authentication";

function Navigation(){

    const Stack = createNativeStackNavigator();
    const session = useContext(SessionContext);
    console.log('status:', session.status);

    return(
    <NavigationContainer>
    {session?.status === true && (
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Stack.Screen name='Home' component={Home}/>
        </Stack.Navigator>
    )}
    {session?.status !== true && (
        <Stack.Navigator initialRouteName="Authentication" screenOptions={{headerShown: false}}>
            <Stack.Screen name='Authentication' component={Authentication}/>
        </Stack.Navigator>
    )}
    </NavigationContainer>
    );
}

export default Navigation;

