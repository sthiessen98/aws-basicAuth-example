import { useState } from "react";
import SignUp from './SignUp';
import SignIn from './SignIn';
import ConfirmSignUp from "./ConfirmSignUp";

export type authStates = 'signIn' | 'signUp' | 'confirmSignUp';

function Authentication(){

    const [authState, setAuthState] = useState<authStates>('signIn');

    function handleStateChange(state: authStates){
        setAuthState(state);
    };

    if(authState === 'signIn'){
        return(<SignIn authState={authState} onStateChange={handleStateChange}/>);
    }
    if(authState === 'signUp'){
        return(<SignUp authState={authState} onStateChange={handleStateChange}/>);
    }
    if(authState === 'confirmSignUp'){
        return(<ConfirmSignUp authState={authState} onStateChange={handleStateChange}/>)
    }

    return(<></>);
}

export default Authentication;