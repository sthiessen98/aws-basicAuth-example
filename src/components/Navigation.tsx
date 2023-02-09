import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/Home";

function Navigation(){

    const Stack = createNativeStackNavigator();
    
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;

