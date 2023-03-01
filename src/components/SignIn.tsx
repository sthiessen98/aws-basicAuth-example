import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { validateEmail, validatePassword } from '../utils/validation';
import { SessionContext } from './Session';
import { SignInProps } from '../utils/NavigationTypes';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function SignIn({navigation}: SignInProps){

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);

    const { authenticate } = useContext(SessionContext);

    async function attemptSignIn(){
        const emailErrors = validateEmail(email);
        const passwordErrors = validatePassword(password);
        if(!emailErrors && !passwordErrors){
            authenticate(email, password);
        }else{
            setEmailError(emailErrors);
            setPasswordError(passwordErrors);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sign In</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.textInput} onChangeText={(text)=> setEmail(text)} value={email} keyboardType='email-address'></TextInput>
                {emailError && (
                    <Text style={styles.errorText}>{emailError}</Text>
                )}
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.textInput} secureTextEntry={true} onChangeText={(text)=> setPassword(text)} value={password}></TextInput>
                {passwordError && (
                    <Text style={styles.errorText}>{passwordError}</Text>
                )}
            </View>

            <TouchableOpacity style={styles.button} onPress={()=> attemptSignIn()}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>

            <View style={styles.secondaryButtonContainer}>
                <TouchableOpacity style={styles.secondaryButton} onPress={()=> navigation.navigate('ForgotPassword')}>
                    <Text style={styles.secondaryButtonText}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.secondaryButton} onPress={()=> navigation.navigate('SignUp')}>
                    <Text style={styles.secondaryButtonText}>Sign Up</Text>
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