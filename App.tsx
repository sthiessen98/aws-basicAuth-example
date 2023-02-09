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
import { Authenticator } from 'aws-amplify-react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/components/Navigation';

Amplify.configure(awsconfig);

function App() {
  return (
    <Authenticator usernameAttributes='email'>
        <Navigation/>
    </Authenticator>
  );
}

export default App;
