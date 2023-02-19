import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function ForgotPassword(props: any){
    const [email, setEmail] = useState<string>('');
    const [emailError, setEmailError] = useState<string | null>(null);
    
    if(props.authState !== 'forgotPassword'){
        return(<></>);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Reset Your Password</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.textInput} onChangeText={(text)=> setEmail(text)} value={email} keyboardType='email-address'></TextInput>
                {emailError && (
                    <Text style={styles.errorText}>{emailError}</Text>
                )}
            </View>

            <TouchableOpacity style={styles.button} onPress={()=> console.log('Sending password reset...')}>
                <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>

            <View style={styles.secondaryButtonContainer}>
                <TouchableOpacity style={styles.secondaryButton} onPress={()=> props.onStateChange('signIn')}>
                    <Text style={styles.secondaryButtonText}>Back to Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ForgotPassword;

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