import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Dimensions } from 'react-native';
import { authStates } from './Authentication';
import { initUserPool } from '../utils/config';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { validateCode, validateEmail } from '../utils/validation';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

interface ConfirmSignUpProps{
    authState: string;
    onStateChange: (state: authStates)=> void;
    defaultEmail?: string;
}

function ConfirmSignUp({authState, onStateChange, defaultEmail}: ConfirmSignUpProps){

    const [email, setEmail] = useState<string>(defaultEmail ?? '');
    const [emailError, setEmailError] = useState<string | null>(null);
    const [confirmationCode, setConfirmationCode] = useState<string>('');
    const [codeError, setCodeError] = useState<string | null>(null);
    
    if(authState !== 'confirmSignUp'){
        return(<></>);
    }

    async function confirmNewUser(){
        const emailErrors = validateEmail(email);
        const codeErrors = validateCode(confirmationCode)
        if(codeErrors || emailErrors){
            setEmailError(emailErrors);
            setCodeError(codeErrors);
        }else{
            const userPool = initUserPool();
        const userData = {
            Username: email,
            Pool: userPool,
        }
        const cognitoUser = new CognitoUser(userData);

        cognitoUser.confirmRegistration(confirmationCode, true, function(err, result) {
            if (err) {
                console.error(err.message || JSON.stringify(err));
                return;
            }
            console.log(result);
            onStateChange('signIn');
        });
        }
    }

    async function resendCode(){
        const emailErrors = validateEmail(email);
        if(emailErrors){
            setEmailError(emailErrors);
        }else{
            const userPool = initUserPool();
        const userData = {
            Username: email,
            Pool: userPool,
        }
        const cognitoUser = new CognitoUser(userData);

        cognitoUser.resendConfirmationCode( function(err, result) {
            if (err) {
                console.error(err.message || JSON.stringify(err));
                return;
            }
            console.log(result);
        });
        }
    }
    
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sign Up Verification</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.textInput} onChangeText={(text)=> setEmail(text)} value={email} keyboardType='email-address'></TextInput>
                {emailError && (
                    <Text style={styles.errorText}>{emailError}</Text>
                )}
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Enter your Confirmation Code</Text>
                <TextInput style={styles.textInput} onChangeText={(text)=> setConfirmationCode(text)} value={confirmationCode}></TextInput>
            </View>
            {codeError && (
                    <Text style={styles.errorText}>{codeError}</Text>
                )}

            <TouchableOpacity style={styles.button} onPress={()=> confirmNewUser()}>
                <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>

            <View style={styles.secondaryButtonContainer}>
                <TouchableOpacity style={styles.secondaryButton} onPress={()=> resendCode()}>
                    <Text style={styles.secondaryButtonText}>Resend Code</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.secondaryButton} onPress={()=> onStateChange('signIn')}>
                    <Text style={styles.secondaryButtonText}>Back to Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ConfirmSignUp;

const styles = StyleSheet.create({
    container: {
        height: screenHeight-30,
        justifyContent: 'center',
    },
    inputContainer: {
        marginBottom: 10,
    },
    secondaryButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    text: {
        color: 'seagreen',
        fontSize: 22,
        justifyContent: 'flex-start',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    label: {
        color: 'black',
        fontSize: 14,
    },
    textInput: {
        height: 40,
        width: screenWidth - 20,
        borderColor: 'black',
        borderWidth: 1,
        color: 'gray',
        fontSize: 14,
        marginBottom: 3,
    },
    button: {
        backgroundColor: 'seagreen',
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
    },
    secondaryButton: {
        height: 40,
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    secondaryButtonText: {
        color: 'black',
        fontSize: 12,
        textTransform: 'uppercase',
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
    }
});