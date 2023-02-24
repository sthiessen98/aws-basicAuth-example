import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import { useState } from "react";
import { View } from "react-native";
import { initUserPool } from "../utils/config";
import { SessionContext, AccountContextType } from "./Session";

function Account(props: any){

    const [status, setStatus] = useState<boolean>(false);

    function authenticate(Username: string, Password: string){
        const authData = {
            Username,
            Password,
        };
        const authDetails = new AuthenticationDetails(authData);

        const Pool = initUserPool();
        const userData = {
            Username,
            Pool,
        };
        const cognitoUser = new CognitoUser(userData);

            cognitoUser.authenticateUser(authDetails, {
                onSuccess: function(result){
                    console.log('successfully authenticated!');
                    setStatus(true);
                },
                onFailure(err){
                    console.error(err.message || JSON.stringify(err));
                    setStatus(false);
                }
            }
            );
    }
    
    return (
        <View style={{flex: 1}}>
            <SessionContext.Provider value={{authenticate, status}}>
            {props.children}
            </SessionContext.Provider>
        </View>
    );
}

export default Account;