import { useState } from "react";
import SignUp from './SignUp';
import SignIn from './SignIn';
import ConfirmSignUp from "./ConfirmSignUp";
import ForgotPassword from "./ForgotPassword";

export type authStates = 'signIn' | 'signUp' | 'confirmSignUp' | 'forgotPassword';

function Authentication(){

    const [authState, setAuthState] = useState<authStates>('signIn');
    const [defaultEmail, setDefaultEmail] = useState<string | undefined>(undefined);

    function handleStateChange(state: authStates, autofillEmail?: string){
        setDefaultEmail(autofillEmail);
        setAuthState(state);
    };

    if(authState === 'signIn'){
        return(<SignIn authState={authState} onStateChange={handleStateChange}/>);
    }
    if(authState === 'signUp'){
        return(<SignUp authState={authState} onStateChange={handleStateChange}/>);
    }
    if(authState === 'confirmSignUp'){
        return(<ConfirmSignUp authState={authState} onStateChange={handleStateChange} defaultEmail={defaultEmail}/>)
    }
    if(authState === 'forgotPassword'){
        return(<ForgotPassword authstate={authState} onStateChange={handleStateChange}/>)
    }

    return(<></>);
}

export default Authentication;