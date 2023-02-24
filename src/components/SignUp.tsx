import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { validateEmail, validatePassword } from '../utils/validation';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { initUserPool } from '../utils/config';
import { SignUpProps } from '../utils/NavigationTypes';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function SignUp({navigation}: SignUpProps){

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);

    async function onSubmit(){
        const emailErrors = validateEmail(email);
        const passwordErrors = validatePassword(password);
        if(!emailErrors && !passwordErrors){
                //Attempt to register new user with Cognito
                const userPool = initUserPool();

                const attributeList = [];
                const dataEmail = {
                    Name: 'email',
                    Value: email
                };
                const emailAttribute = new CognitoUserAttribute(dataEmail);
    
                attributeList.push(emailAttribute);

                    userPool.signUp(email, password, attributeList, [], function(
                        err, result
                        ){                        
                        if(err){
                            setEmailError(err?.message);
                            return;
                        }
                        const cognitoUser = result?.user;
                        console.log(cognitoUser?.getUsername());
                        navigation.navigate('ConfirmSignUp', {defaultEmail: cognitoUser?.getUsername()});
                    }
                    );
 
        }else{
            setEmailError(emailErrors);
            setPasswordError(passwordErrors);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sign Up</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.textInput} onChangeText={(text)=> setEmail(text)} value={email} keyboardType='email-address'></TextInput>
                {emailError && (
                    <Text style={styles.errorText}>{emailError}</Text>
                )}
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.textInput} onChangeText={(text)=> setPassword(text)} value={password}></TextInput>
                {passwordError && (
                    <Text style={styles.errorText}>{passwordError}</Text>
                )}
            </View>

            <TouchableOpacity style={styles.button} onPress={()=> onSubmit()}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <View style={styles.secondaryButtonContainer}>
                <TouchableOpacity style={styles.secondaryButton} onPress={()=> navigation.navigate('ConfirmSignUp')}>
                    <Text style={styles.secondaryButtonText}>Confirm a Code</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.secondaryButton} onPress={()=> navigation.navigate('SignIn')}>
                    <Text style={styles.secondaryButtonText}>Return</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: screenHeight-30,
        justifyContent: 'center',
        marginLeft: 5,
        marginRight: 5,
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