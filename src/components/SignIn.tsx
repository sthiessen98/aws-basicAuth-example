import React from 'react';
import { View, Text, Button } from 'react-native';

export default function SignIn(props: any){

    if(props.authState === 'signUp'){
    return (
        <View>
            <Text>Sign In</Text>
            <Button title='Confirm a Code' onPress={()=> props.onStateChange('confirmSignUp')}/>
            <Button title='Return' onPress={()=> props.onStateChange('signIn')}/>
        </View>
    )}else{
        return (<></>);
    }
    
}