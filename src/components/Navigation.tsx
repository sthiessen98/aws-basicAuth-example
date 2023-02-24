import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/Home";
import { useContext } from "react";
import { SessionContext } from "./Session";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { RootStackParamList } from "../utils/NavigationTypes";
import ForgotPassword from "./ForgotPassword";

function Navigation(){

    const Stack = createNativeStackNavigator<RootStackParamList>();
    const session = useContext(SessionContext);

    return(
    <NavigationContainer>
    {session?.status === true && (
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false, animation: 'none'}}>
            <Stack.Screen name='Home' component={Home}/>
        </Stack.Navigator>
    )}
    {session?.status !== true && (
        <Stack.Navigator initialRouteName="SignIn" screenOptions={{headerShown: false, animation: 'none'}}>
            <Stack.Screen name='SignIn' component={SignIn}/>
            <Stack.Screen name='SignUp' component={SignUp}/>
            <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
        </Stack.Navigator>
    )}
    </NavigationContainer>
    );
}

export default Navigation;

