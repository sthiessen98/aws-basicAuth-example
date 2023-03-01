import { AuthenticationDetails, CognitoUser, CognitoUserSession, UserData } from "amazon-cognito-identity-js";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { initUserPool } from "../utils/config";
import { SessionContext } from "./Session";

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

    function getSession(){
        const Pool = initUserPool();
        const user = Pool.getCurrentUser();
        if(user){
            user.getSession((err: Error | null, session: CognitoUserSession | null)=> {
                if(err){
                    console.log(err);
                    setStatus(false);
                }else{
                    console.log('valid session?:', session?.isValid());
                    setStatus(true);
                }
            });
        }else{
            setStatus(false);
        }
    }

    function logout(){
        const Pool = initUserPool();
        const user = Pool.getCurrentUser();
        if(user){
            user.signOut();
        }
        setStatus(false);
    }
    
    return (
        <View style={{flex: 1}}>
            <SessionContext.Provider value={{authenticate, getSession, logout, status}}>
            {props.children}
            </SessionContext.Provider>
        </View>
    );
}

export default Account;