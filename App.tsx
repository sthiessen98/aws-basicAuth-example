/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

//@ts-ignore
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
//@ts-ignore
import { Authenticator, ConfirmSignIn } from 'aws-amplify-react-native';
import Navigation from './src/components/Navigation';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import SignUp from './src/components/SignUp';
import SignIn from './src/components/SignIn';
import ForgotPassword from './src/components/ForgotPassword';
import ConfirmSignUp from './src/components/ConfirmSignUp';

Amplify.configure(awsconfig);

function App() {
  return (
    <View style={styles.container}>
      <Authenticator usernameAttributes='email'
     hideDefault={true} 
     authState='signIn'
     onStateChange={(authState: string)=> console.log('authState:',authState)}>
      <SignIn />
      <SignUp/>
      <ConfirmSignUp/>
      <ConfirmSignIn/>
      <ForgotPassword/>
      <Navigation/>
    </Authenticator>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
    backgroundColor: 'red',
  }
}

export default App;
